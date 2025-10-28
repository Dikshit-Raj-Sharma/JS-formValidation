const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const nameIcon = document.querySelector("#name + i");
const emailIcon = document.querySelector("#email + i");
const passwordIcon = document.querySelector("#password + i");

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateName() && validateEmail() && validatePassword()) {
        alert("Form Submitted Successfully!");
        clearForm();
    }
});

function validateName() {
    let name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is Required";
        nameIcon.classList.remove('fa-check');
        nameIcon.classList.add('fa-xmark');
        nameIcon.style.color = "#ff0000";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Full Name";
        nameIcon.classList.remove('fa-check');
        nameIcon.classList.add('fa-xmark');
        nameIcon.style.color = "#ff0000"; return false;
    }
    nameError.innerHTML = "";
    nameIcon.classList.remove('fa-xmark');
    nameIcon.classList.add('fa-check');
    nameIcon.style.color = "#00ff00";
    return true;
}
function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is Required";
        emailIcon.classList.remove('fa-check');
        emailIcon.classList.add('fa-xmark');
        emailIcon.style.color = "#ff0000";
        return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.innerHTML = "Enter Valid Email";
        emailIcon.classList.remove('fa-check');
        emailIcon.classList.add('fa-xmark');
        emailIcon.style.color = "#ff0000"; return false;
    }
    emailError.innerHTML = "";
    emailIcon.classList.remove('fa-xmark');
    emailIcon.classList.add('fa-check');
    emailIcon.style.color = "#00ff00";
    return true;
}
function validatePassword() {
    let password = document.getElementById('password').value;

    if (password.length == 0) {
        passwordError.innerHTML = "Password is Required";
        passwordIcon.classList.remove('fa-check');
        passwordIcon.classList.add('fa-xmark');
        passwordIcon.style.color = "#ff0000";
        return false;
    }
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)) {
        passwordError.innerHTML = "Password must have 8+ chars, 1 uppercase, 1 number, 1 special symbol";
        passwordIcon.classList.remove('fa-check');
        passwordIcon.classList.add('fa-xmark');
        passwordIcon.style.color = "#ff0000"; return false;
    }
    passwordError.innerHTML = "";
    passwordIcon.classList.remove('fa-xmark');
    passwordIcon.classList.add('fa-check');
    passwordIcon.style.color = "#00ff00";
    return true;
}
function clearForm() {
    document.querySelector("form").reset();
    [nameIcon, emailIcon, passwordIcon].forEach(icon =>{
        icon.classList.remove("fa-xmark","fa-check");
        icon.style.color = '';
    });
    [nameError, emailError, passwordError].forEach(span => {
        span.innerHTML = '';
    });
}
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);
