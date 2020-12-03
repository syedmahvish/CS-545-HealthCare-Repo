let errorContainer = document.getElementById("errorContainerReg");
let regForm = document.getElementById("signupForm");
let firstName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");

let FirstNameError = document.getElementById("FirstNameError");
let EmailError = document.getElementById("EmailError");
let PasswordError = document.getElementById("passwordError");
let RePasswordError = document.getElementById("repasswordError");
let isUserExsistError = document.getElementById("userExsistError")

let error = false;

if (errorContainer) {
  errorContainer.style.display = "none";
  FirstNameError.style.display = "none";
  EmailError.style.display = "none";
  PasswordError.style.display = "none";
  RePasswordError.style.display = "none"; 
}



if(regForm){
    regForm.addEventListener("submit", (event) => {
        event.preventDefault();
        error = false;
       
        errorContainer.style.display = "none";
        FirstNameError.style.display = "none"; 
        EmailError.style.display = "none";
        PasswordError.style.display = "none";
        RePasswordError.style.display = "none";


    if (firstName.value.trim().length < 1) {
      error = true;
      FirstNameError.style.display = "block";
    }
    if (email.value.trim().length < 1 || !validateEmail(email.value)) {
      error = true;
      EmailError.style.display = "block";
    }
    if (password.value.trim().length < 1) {
      error = true;
      PasswordError.style.display = "block";
    }
    if (repassword.value.trim().length < 1 || password.value != repassword.value) {
        error = true;
        RePasswordError.style.display = "block";
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


