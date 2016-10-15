get("#logo").css({width:"300px"})


var width = 10
setInterval(function() {
  width = width + 20
  get("#logo").css({left:width, width: width})
}, 20)
