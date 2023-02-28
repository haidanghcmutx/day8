var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirmpassword')
var form = document.querySelector('form')

function showError(input, message) {
    let parent = input.parentElement
     let small= parent.querySelector('small')
     parent.classList.add('error')
     small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement
     let small= parent.querySelector('small')
     parent.classList.remove('error')
     small.innerText = ''
}

function checkEmptyError(array) {
    let isEmptyError = false;
    array.forEach(input => {
        input.value = input.value.trim();
        if(!input.value) {
            isEmptyError = true;
            showError(input, 'Khong duoc de trong')
        } else {
            showSuccess(input)
        }
    });
    return isEmptyError;
}

function checkEmailError(input) {
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   input.value = input.value.trim()

   let isEmailError= !regexEmail.test(input.value)
   if (regexEmail.test(input.value)){
       showSuccess(input);
    } else {
        showError(input, 'Email Invalid')
   }
   return isEmailError
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim()
    if(input.value.length < min) {
        showError(input, `Phai co it nhat ${min} ky tu`)
        return true
    }
     if(input.value.length > max) {
        showError(input, `Không được vượt quá ${max} ký tự`)
        return true
     }

     return false
    }

function checkMatchingPasswordError(PasswordInput, cfPassWordInput) {
     if(PasswordInput.value !== cfPassWordInput) {
        showError(cfPassWordInput, 'Mật khẩu không trùng khớp')
        return true 
     }
     return false
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
   let IsEmptyError = checkEmptyError([username, email, password, confirmPassword])   
   let isEmailError = checkEmailError(email)
    let IsUserNameLengthError =  checkLengthError(username, 8, 16)
    let IsPasswordLengthError = checkLengthError(password, 8,16)
    let IsMatchError = checkMatchingPasswordError(password, confirmPassword)
    

})