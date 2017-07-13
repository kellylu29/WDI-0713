var input = document.querySelector ('input')

input.onkeyup = function () {
  var hOne = document.getElementById ('hOne')
  
  hOne.innerHTML = input.value

}