esc = (name) -> name.replace(/\//g, '_')
boxof = (name) -> "polygon#" + esc(name)
pathof = (from, to) -> "path#"+esc(from)+"-"+esc(to)
boxFocus = ""
nodes = []
for node, dat of gostd
    dat.name = node
    nodes.push(dat)

xgrid = 140
ygrid = 30
boxWidth = 120
boxHeight = 20

grids = []
xMax = 0
yMax = 0

main = ->
    cmpNode = (a, b) ->
        return -1 if a.x < b.x
        return 1 if a.x > b.x
        return -1 if a.y < b.y
        return 1 if a.y > b.y
        return 0

    nodes.sort(cmpNode)

    xpush = ->
        xmax = 0
        for dat in nodes
            if dat.x > xmax
                xmax = dat.x

        tryPush = (name) ->
            node = gostd[name]
            if node.x == xmax
                return {able: false, worthy: false}
            worthy = false
            for out in node.outs
                if gostd[out].x > node.x + 1
                    worthy = true
                    continue
                sub = tryPush(out)
                if not sub.able
                    return {able: false, worthy: false}
                if sub.worthy
                    worthy = true
            return {able: true, worthy: worthy}

        pushWorthy = (name) ->
            ret = tryPush(name)
            return ret.worthy

        push = (name) ->
            
            node = gostd[name]
            for out in node.outs
                if gostd[out].x > node.x + 1
                    continue # no need to push this
                push(out)

            node.newx = node.x + 1

            return

        revNodes = nodes.slice().reverse()
        for dat in revNodes
            name = dat.name
            # if dat.ins.length > 0
            #     continue
            while pushWorthy(name)
                for n in nodes
                    n.newx = n.x
                push(name)
                for n in nodes
                    n.x = n.newx

        return

    xpush()

    layout = ->
        xmax = 0
        ymax = 0
        ymin = 0
        for node, dat of gostd
            if dat.x > xmax
                xmax = dat.x
            if dat.y > ymax
                ymax = dat.y

        taken = []
        cols = []
        for i in [0..xmax]
            taken.push({})
            cols.push([])

        for node, dat of gostd
            cols[dat.x].push(dat)

        for col in cols
            col.sort((a, b) ->
                return -1 if a.outs.length > b.outs.length
                return 1 if a.outs.length < b.outs.length
                return 1 if a.name > b.name
                return -1 if a.name < b.name
                return 0
            )
        for col in cols
            for dat in col
                xthis = dat.x
                xmax = dat.x
                xmin = -1
                for out in dat.outs
                    n = gostd[out]
                    if n.x > xmax
                        xmax = n.x
                    if xmin == -1 or n.x < xmin
                        xmin = n.x

                tak = taken[xthis]
                nin = 0
                sin = 0
                for input in dat.ins
                    sin = sin + gostd[input].newy
                    nin = nin + 1
                mid = 0
                if nin > 0
                    mid = Math.round(sin / nin)
                offset = 0
                if isNaN(mid)
                    throw new Error("mid is not a number")

                while true
                    if mid + offset not of tak
                        y = mid + offset
                        break
                    if mid - offset not of tak
                        y = mid - offset
                        break
                    offset = offset + 1
                
                if (y-2) of tak and (y-1) not of tak
                    y = y - 1
                else if (y-1) not of tak and (y+2) of tak and (y+1) not of tak
                    y = y + 1

                if y < ymin
                    ymin = y

                tak[y-1] = true
                tak[y] = true
                tak[y+1] = true
                
                xmax = xmax-1
                if xmax >= xthis+1
                    i = xthis+1
                    while i <= xmax
                        taken[i][y] = true
                        i = i + 1
                dat.newy = y
                dat.xto = xmax

        for node, dat of gostd
            dat.y = dat.newy - ymin # reassign y
            # if dat.x % 2 == 1
            #     dat.y = dat.y + 1
            dat.y = dat.y / 2

            # if dat.outs.length == 0
            #     dat.y = dat.y + 1
        return

    layout()
    createDAG()
    drawDAG()
    # buildGrids()
    return

buildGrids = ->
    xMax = 0
    yMax = 30
    grids = []
    for node in nodes
        if node.x > xMax
            xMax = node.x

    for i in [0..xMax]
        grids.push({})

    for node in nodes
        grids[node.x][node.y * 2] = true
        grids[node.x][node.y * 2 - 1] = true
        grids[node.x][node.y * 2 + 1] = true

    return

createDAG = ->
    svg = d3.select("svg#main")

    paths = []
    for node, dat of gostd
        for output in dat.outs
            paths.push({n:esc(node)+"-"+esc(output)})

    for path in paths
        p = svg.append("path")
        p.attr("d", "")
        p.attr("id", "BG-"+path.n)
        p.attr("class", "bg")

    for path in paths
        p = svg.append("path")
        p.attr("d", "")
        p.attr("id", path.n)
        p.attr("class", "dep")

    lightIns = (name, first) ->
        if first
            boxin = "box in"
            depin = "dep in"
        else
            boxin = "box in2"
            depin = "dep in2"

        for input in gostd[name].ins
            svg.select(boxof(input)).attr("class", boxin)
            svg.select(pathof(input, name)).attr("class", depin)
            lightIns(input, false)
        return

    lightOuts = (name, first) ->
        if first
            boxout = "box out"
            depout = "dep out"
        else
            boxout = "box out2"
            depout = "dep out2"

        for output in gostd[name].outs
            svg.select(boxof(output)).attr("class", boxout)
            svg.select(pathof(name, output)).attr("class", depout)
            lightOuts(output, false)
        return

    hoverFunc = (name) ->
        return (d) ->
            svg.selectAll("polygon").attr("class", "box")
            svg.selectAll("path.dep").attr("class", "dep")
            svg.select(boxof(name)).attr("class", "box focus")
            lightIns(name, true)
            lightOuts(name, true)

            return

    clickFunc = (name) ->
        hover = hoverFunc(name)
        return (d) ->
            hover()

            if boxFocus == name
                return
            svg.select("text.lab#lab-"+esc(boxFocus)).classed({
                "focus": false,
            })
            boxFocus = name
            svg.select("text.lab#lab-"+esc(boxFocus)).classed({
                "focus": true,
            })
            return
    
    dragFunc = (name) ->
        return (d) ->
            ydrag = Math.floor(d3.event.y / ygrid)
            ydrag = 0 if ydrag < 0
            ydrag = yMax if ydrag > yMax
            
            node = gostd[name]
            if not grids[node.x][ydrag]
                node.y = ydrag
            
            drawDAG()
            buildGrids()

            return

    for node, dat of gostd
        b = svg.append("polygon")
        b.attr("class", "box")
        b.attr("id", esc(node))

        lab = svg.append("text")
        lab.attr("class", "lab")
        lab.attr("id", "lab-"+esc(node))
        lab.text(node)

        b.on("mouseover", hoverFunc(dat.name))

        # b.on("drag", dragFunc(dat.name))
        # lab.on("drag", dragFunc(dat.name))
        # b.on("click", clickFunc(dat.name))
        # lab.on("click", clickFunc(dat.name))

    return


drawDAG = ->
    # we now start drawing
    svg = d3.select("svg#main")
    xmax = 0
    ymax = 0
    for dat in nodes
        if dat.x > xmax
            xmax = dat.x
        if dat.y > ymax
            ymax = dat.y
    svg.attr("width", (xmax + 1) * xgrid)
    svg.attr("height", (ymax + 1) * ygrid)

    paths = []
    for node, dat of gostd
        for output in dat.outs
            toNode = gostd[output]

            fromx = dat.x * xgrid+boxWidth
            fromy = dat.y * ygrid+boxHeight / 2

            tox = toNode.x * xgrid
            toy = toNode.y * ygrid+boxHeight / 2
            
            turnx = tox - 10
            
            path = "M" + fromx + " " + fromy
            path += " L" + turnx + " " + fromy
            path += " L" + turnx + " " + toy
            path += " L" + tox + " " + toy
            paths.push({p:path, n:esc(node)+"-"+esc(output)})

    for path in paths
        p = svg.select("path#BG-"+path.n)
        p.attr("d", path.p)

    for path in paths
        p = svg.select("path#"+path.n)
        p.attr("d", path.p)

    for node, dat of gostd
        b = svg.select("polygon#"+esc(node))
        xleft = dat.x * xgrid
        xright = xleft + boxWidth
        ytop = dat.y * ygrid
        ybottom = ytop + boxHeight
        ymid = ytop + boxHeight / 2
        points = ""

        if dat.ins.length == 0 and dat.outs.length == 0
            points = points + xleft + "," + ytop + " "
            points = points + xleft + "," + ybottom + " "
            points = points + xright + "," + ybottom + " "
            points = points + xright + "," + ytop
        else if dat.ins.length == 0
            points = points + xleft + "," + ytop + " "
            points = points + xleft + "," + ybottom + " "
            points = points + xright + "," + ybottom + " "
            points = points + (xright + 5) + "," + ymid + " "
            points = points + xright + "," + ytop
        else if dat.outs.length == 0
            points = points + xleft + "," + ytop + " "
            points = points + (xleft - 5) + "," + ymid + " "
            points = points + xleft + "," + ybottom + " "
            points = points + xright + "," + ybottom + " "
            points = points + xright + "," + ytop
        else
            points = points + xleft + "," + ytop + " "
            points = points + (xleft - 5) + "," + ymid + " "
            points = points + xleft + "," + ybottom + " "
            points = points + xright + "," + ybottom + " "
            points = points + (xright + 5) + "," + ymid + " "
            points = points + xright + "," + ytop

        b.attr("points", points)

        lab = svg.select("text#lab-"+esc(node))
        lab.attr("x", dat.x * xgrid + boxWidth / 2)
        lab.attr("y", dat.y * ygrid + boxHeight / 2 + 4)

    return

keydown = (e) ->
    if boxFocus == ""
        return

    if e.which == 38
        # up
        node = gostd[boxFocus]
        y = node.y * 2 - 1
        while true
            if y not of grids[node.x]
                node.y = y / 2
                drawDAG()
                buildGrids()
                break
            y = y - .5
        e.preventDefault()
    else if e.which == 40
        # down
        node = gostd[boxFocus]
        y = node.y * 2 + 1
        while true
            if y not of grids[node.x]
                node.y = y / 2
                drawDAG()
                buildGrids()
                break
            y = y + .5
        e.preventDefault()
    
    return true

# $(document).keydown(keydown)
$(document).ready(main)
