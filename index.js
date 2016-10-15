get("#logo").css({width:"300px"})


var red = true
setInterval(function() {
  red = !red
  
  var color = red ? "red" : "green"
  
  get("#phone").css({ border: "20px solid " + color })
}, 20)
