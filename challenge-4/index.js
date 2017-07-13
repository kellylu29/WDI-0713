// access form element
var form = document.querySelector("form")

// function to check if a string character
// is a number
function isANumber(char) {
  return !(isNaN(char)) && char != " "
}

// form submit event handler
form.addEventListener("submit", function() {
  
  // array of input elements
  var inputs = document.querySelectorAll("input")
  
  // input values
  var username = inputs[0].value
  var email = inputs[1].value
  var password = inputs[2].value
  
  // boolean values
  var isUsernameCorrect = false
  var isPasswordCorrect = false
  
  // loop over username
  for(let i=0; i<username.length; i++) {
    
    // for each character
    let char = username[i]
    
    // if it's a number
    if(isANumber(char)) {
      
      // the username is correct
      isUsernameCorrect = true
      
      // break out of the loop
      break;
    }
  }
  
  // check password for a match
  if(password === "12345678"){
    
    // password is correct
    isPasswordCorrect = true
  }
 
  // is username or password are incorrect
  if(!isUsernameCorrect || !isPasswordCorrect) {
    
    // alert an error
    alert("incorrect username or password")
  }
})