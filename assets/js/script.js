// console.log("hello world");//works

const submit = document.querySelector(".submit"); //button
const input = document.querySelector("input"); //input value
const form = document.querySelector("form"); 
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const email = input.value//taking user input
    input.value = ''; //after user inserts email, whatever email inserted will be deleted
    console.log(email);//works. takes in email user inserts

    if (!isEmail(email)) {
        errorMsg.style.display = "block";
        input.style.borderColor = "#ff5263"
    } else {
        errorMsg.style.display = "none";
        input.style.borderColor = "#c2d3ff"
        alert("Thank you for suscribing!")
    }

    function isEmail(input) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
    }

}



