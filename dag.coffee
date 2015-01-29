esc = (name) -> name.replace(/\//g, '_')
boxof = (name) -> "rect#" + esc(name)
pathof = (from, to) -> "path#"+esc(from)+"-"+esc(to)
boxFocus = ""
nodes = []
for node, dat of gostd
    dat.name = node
    nodes.push(dat)

xgrid = 130
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


    layout = ->
        xmax = 0
        ymax = 0
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
                y = 0
                while y of tak
                    y = y + 1

                tak[y] = true
                
                xmax = xmax-1
                if true
                    if xmax > xthis
                        for i in [xthis+1..xmax]
                            taken[i][y] = true
                dat.newy = y
                dat.xto = xmax

        for node, dat of gostd
            dat.y = dat.newy # reassign y
            # if dat.outs.length == 0
            #     dat.y = dat.y + 1
        return


    lineup = ->
        xmax = 0
        ymax = 0
        for dat in nodes
            if dat.x > xmax
                xmax = dat.x
            if dat.y > ymax
                ymax = dat.y
        ymax += 0   #leave some space

        for node, dat of gostd
            dat.newy = dat.y
        cols = []
        for i in [0..xmax]
            cols.push([])
        for node, dat of gostd    #may need to use nodes
            cols[dat.x].push(dat)

        trunkCols = []
        inLeafNums = []
        outLeafNums = []
        for i in [0..xmax]
            trunkCols.push([])
            inLeafNums.push(0)
            outLeafNums.push(0)
        # handle node with no in(top), and no out(to bottom)
        # get truckCols
        for col, colId in cols
            for dat in col
                if dat.outs.length is 0
                    dat.newy = ymax - outLeafNums[colId]
                    outLeafNums[colId] += 1
                    continue
                if (colId != 0) and (dat.ins.length is 0)
                    dat.newy = inLeafNums[colId]
                    inLeafNums[colId] += 1
                    continue
                trunkCols[colId].push(dat)
        # raw placement, place truck node in middle
        for col, colId in trunkCols
            ystart = Math.floor((ymax+inLeafNums[colId]-outLeafNums[colId])/2 - (col.length/2))
            for dat,id in col
                dat.newy = ystart + id
        #would also change in gostd
        for node, dat of gostd
            dat.y = dat.newy

        #adjustment, place node close to "in" node
        lineAdjust=->
            for col, colId in trunkCols
                if colId == 0
                    continue
                ystart = inLeafNums[colId]
                yend = ymax - outLeafNums[colId]
                #score is the node's preference for a position in range [ystart, yend)
                scoreMatrix = []

                for dat in col
                    scoreMatrix.push([])
                for dat, datId in col
                    #get in x,y axis
                    yvalues = []
                    for indat in dat.ins
                        indatX = gostd[indat].x
                        indatY = gostd[indat].newy  #use the updated y value
                        if indatY < inLeafNums[indatX] || indatY >= ymax - outLeafNums[indatX]# not in trunkCols[indat.x]
                            continue
                        yvalues.push(indatY)

                    #calculate score
                    for j in [0..ymax]
                        if j < ystart || j >= yend
                            scoreMatrix[datId].push(9999)
                            continue

                        score = 0
                        for y,id in yvalues
                            score += Math.abs(j-y)
                        if yvalues.length != 0
                            score = score / yvalues.length
                        scoreMatrix[datId].push(score)

                #begin the matching algorithm
                for dat, datId in col
                    dat.newy = -1
                    dat.priorityList = []
                    for i in [0..ymax]
                        dat.priorityList.push(i)
                    dat.priorityList.sort((a, b)->
                        return -1 if scoreMatrix[datId][a] < scoreMatrix[datId][b]
                        return 1  if scoreMatrix[datId][a] > scoreMatrix[datId][b]
                        return 0
                    )
                    #console.log(scoreMatrix[datId])
                    #console.log(dat.priorityList)
                records = []
                for _ in [0..ymax]
                    records.push(-1)
                #console.log(records)

                colFinished = (col)->
                    if col.length == 0
                        return true
                    b = true
                    for dat in col
                        if dat.newy == -1
                            b = false
                            break
                    return b

                getOne = (col)->
                    for dat, datId in col
                        if dat.newy == -1
                            return datId
                    return -1

                canPut = (datId, tarId)->
                    curId = records[tarId]
                    return true if curId == -1
                    return true if scoreMatrix[datId][tarId] < scoreMatrix[curId][tarId]
                    return false

                while not colFinished(col)
                    datId = getOne(col)
                    while true
                        tarId = col[datId].priorityList.shift()
                        if canPut(datId, tarId)
                            curId = records[tarId]
                            console.log("canput", datId, tarId, curId)
                            col[curId].newy = -1 if curId != -1
                            #new val
                            records[tarId] = datId
                            col[datId].newy = tarId
                            break

        lineAdjust()

        for node, dat of gostd
            dat.y = dat.newy
        return

    xpush()
    lineup()
    #pullclose()
    #layout()


    createDAG()
    drawDAG()
    buildGrids()
    return

buildGrids = ->
    xMax = 0
    yMax = 30
    grids = []
    for node in nodes
        if node.x > xMax
            xMax = node.x

    for i in [0..xMax]
        lst = []
        for j in [0..yMax]
            lst.push(false)
        grids.push(lst)

    for node in nodes
        grids[node.x][node.y] = true

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
            svg.selectAll("rect").attr("class", "box")
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
        b = svg.append("rect")
        b.attr("ry", 5)
        b.attr("ry", 5)
        b.attr("width", boxWidth)
        b.attr("height", boxHeight)
        b.attr("class", "box")
        b.attr("id", esc(node))

        lab = svg.append("text")
        lab.attr("class", "lab")
        lab.attr("id", "lab-"+esc(node))
        lab.text(node)

        b.on("mouseover", hoverFunc(dat.name))

        # b.on("drag", dragFunc(dat.name))
        # lab.on("drag", dragFunc(dat.name))
        b.on("click", clickFunc(dat.name))
        lab.on("click", clickFunc(dat.name))

    return


drawDAG = ->
    # we now start drawing
    svg = d3.select("svg#main")

    paths = []
    for node, dat of gostd
        for output in dat.outs
            toNode = gostd[output]

            fromx = dat.x * xgrid+boxWidth
            fromy = dat.y * ygrid+boxHeight / 2

            tox = toNode.x * xgrid
            toy = toNode.y * ygrid+boxHeight / 2
            
            turnx = tox - 5
            
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
        b = svg.select("rect#"+esc(node))
        b.attr("x", dat.x * xgrid)
        b.attr("y", dat.y * ygrid)

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
        y = node.y - 1
        while y > 0
            if not grids[node.x][y]
                node.y = y
                drawDAG()
                buildGrids()
                break
            y = y - 1
        e.preventDefault()
    else if e.which == 40
        # down
        node = gostd[boxFocus]
        y = node.y + 1
        while y <= yMax
            if not grids[node.x][y]
                node.y = y
                drawDAG()
                buildGrids()
                break
            y = y + 1
        e.preventDefault()
    
    return true

$(document).keydown(keydown)
$(document).ready(main)
