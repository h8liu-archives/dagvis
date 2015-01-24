(function(){
  (function() {
    var svg = d3.select("svg"),
        inner = d3.select("svg g"),
        zoom = d3.behavior.zoom().on("zoom", function() {
          inner.attr("transform", "translate(" + d3.event.translate + ")" +
                                      "scale(" + d3.event.scale + ")");
        });
    svg.call(zoom);
  })();
  try {
    var graphString = (function() {
      var graph_string_array = ['digraph{'];
      var label_to_node = {};
      var count = 0;
      for(var label in gostd) {
        label_to_node[label] = count;
        graph_string_array.push('N'+count+'[label="' + label + '"];');
        ++ count;
      }
      for(var label in gostd) {
        var outs = gostd[label].outs;
        for(var i = 0, l = outs.length; i < l; ++i) {
          graph_string_array.push('N'+label_to_node[label]+' -> N'+label_to_node[outs[i]]+';');
        }
      }
      graph_string_array.push('}');
      return graph_string_array.join('\n');
    })();
    console.log(graphString);

    var g = graphlibDot.read(graphString);
    if (!g.graph().hasOwnProperty("marginx") &&
        !g.graph().hasOwnProperty("marginy")) {
      g.graph().marginx = 20;
      g.graph().marginy = 20;
    }

    d3.select('svg g').call(dagreD3.render(), g);
  } catch (e) { }
})();
