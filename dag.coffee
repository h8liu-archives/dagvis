main = ->
    svg = d3.select("svg#main")

    xgrid = 130
    ygrid = 30
    boxWidth = 120
    boxHeight = 20

    esc = (name) -> name.replace(/\//g, '_')
    boxof = (name) -> "rect#" + esc(name)
    pathof = (from, to) -> "path#"+esc(from)+"-"+esc(to)

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

            p = svg.append("path")
            p.attr("d", path)
            p.attr("class", "bg")

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

            p = svg.append("path")
            p = svg.append("path")
            p.attr("d", path)
            p.attr("id", esc(node)+"-"+esc(output))
            p.attr("class", "dep")

    for node, dat of gostd
        dat.name = node

        b = svg.append("rect")
        b.attr("x", dat.x * xgrid)
        b.attr("y", dat.y * ygrid)
        b.attr("ry", 5)
        b.attr("ry", 5)
        b.attr("width", boxWidth)
        b.attr("height", boxHeight)
        b.attr("class", "box")
        b.attr("id", esc(node))

        lab = svg.append("text")
        lab.attr("x", dat.x * xgrid + boxWidth / 2)
        lab.attr("y", dat.y * ygrid + boxHeight / 2 + 4)
        lab.attr("class", "lab")
        lab.attr("id", "lab-"+name)
        lab.text(node)

        b.on("mouseover", (->
            x = dat
            return (d) ->
                svg.selectAll("rect").attr("class", "box")
                svg.selectAll("path.dep").attr("class", "dep")
                svg.select(boxof(x.name)).attr("class", "box focus")
                for input in x.ins
                    svg.select(boxof(input)).attr("class", "box in")
                    svg.select(pathof(input, x.name)).attr(
                        "class", "dep in"
                    )

                for output in x.outs
                    svg.select(boxof(output)).attr("class", "box out")
                    svg.select(pathof(x.name, output)).attr(
                        "class", "dep out"
                    )

                return
            )()
        )

    return

$(document).ready(main)
