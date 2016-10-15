get("#logo").css({width:"300px"})


var width = 10
setInterval(function() {
  width = width + 20
  get("#logo").css({lef:width})
}, 500)
