get("#logo").css({width:"300px"})


var red = true
setInterval(function() {
  red = !red
  
  var color = red ? "red" : "green"
  
  get("#logo").css({ border: "1px solid " + red })
}, 20)
