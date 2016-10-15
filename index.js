get("#logo").css({width:"300px"})


var blue = true
setInterval(function() {
  blue = !blue
  
  var color = blue ? "blue" : "black"
  
  get("#logo").css({ border: "20px solid " + color })
}, 20)
