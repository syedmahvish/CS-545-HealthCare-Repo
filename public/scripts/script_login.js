let errorContainer = document.getElementById("errorContainerReg");
let regForm = document.getElementById("loginForm");
let email = document.getElementById("email")
let password = document.getElementById("password")

let loginCredential = document.getElementById("loginError");
let isUserExsistError = document.getElementById("userExsistError")

let error = false;

if (errorContainer) {
  errorContainer.style.display = "none";
  loginCredential.style.display = "none";
}



if(regForm){
    regForm.addEventListener("submit", (event) => {
        event.preventDefault();
        error = false;
       
        errorContainer.style.display = "none";
        loginCredential.style.display = "none"; 

    if (email.value.trim().length < 1 || !validateEmail(email.value)) {
      error = true;
      loginCredential.style.display = "block";
    }
    if (password.value.trim().length < 1) {
      error = true;
      loginCredential.style.display = "block";
    }
   
      if (error) {
        errorContainer.style.display = "block";
        isUserExsistError.style.display = "none";
      }
  
      if (!error) {
        regForm.submit();
      }

});
}

function validateEmail(elementValue) {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
  }

