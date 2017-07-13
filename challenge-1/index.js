var buttonOne = document.getElementById('buttonOne')

buttonOne.onclick = function() {
  var msgOne = document.getElementById('msgOne')
  var msgTwo = document.getElementById('msgTwo')
  msgOne.style.display = 'inline-block'
  msgTwo.style.display = 'none'  
}

var buttonTwo = document.getElementById('buttonTwo')

buttonTwo.onclick = function() {
  var msgOne = document.getElementById('msgOne')
  var msgTwo = document.getElementById('msgTwo')
  msgTwo.style.display = 'inline-block'
  msgOne.style.display = 'none'   
}