const text = document.getElementsByClassName("text"),
    note = document.querySelector(".note"),
    check = document.querySelectorAll('input[type="radio"]');

let funSubmit = (e) => {
    if (text[0].value == "" && text[1].value == "") {
        note.textContent = "Pls Enter All Info ...";
        note.classList.add("show-note");
        text[0].focus();
        e.preventDefault();
    } else if (text[0].value == "") {
        note.textContent = "Enter your E-mail pls...";
        note.classList.add("show-note");
        text[0].focus();
        e.preventDefault();
    } else if (text[1].value == "") {
        note.textContent = "Enter your Password pls...";
        note.classList.add("show-note");
        text[1].focus();
        e.preventDefault();
    } else if (text[1].value.length < 8) {
        note.textContent = "Password al least 8 character pls...";
        note.classList.add("show-note");
        text[1].focus();
        e.preventDefault();
    } else if (
        check[0].checked == false &&
        check[1].checked == false &&
        check[2].checked == false
    ) {
        note.textContent = "Select Your Identity pls...";
        note.classList.add("show-note");
        e.preventDefault();
    } else {
        note.textContent = "";
        document.forms[0].action = "../E-Learning/index.html";
    }
};

window.onload = () => {
    setTimeout(() => {
        document.getElementsByClassName("container")[0].classList.add("hide-load");
        document.forms[0].classList.remove("hide-form");
        document.forms[0].classList.add("show-form");
        document.body.style.backgroundColor = "#ececec";
        document.body.style.transition = "1s";
        text[0].focus();
    }, 3000);
};

let lable = document.getElementsByTagName("label");

//when focus on the text => lable will mave up
let funUpEmail = () => {
    lable[0].classList.add("move-up");
};
let funUpPass = () => {
    lable[1].classList.add("move-up");
};

//when blur the text => lable will mave down
let fundownEmail = () => {
    if (text[0].value == "") {
        lable[0].classList.remove("move-up");
        lable[0].style.transition = "transform .3s linear";
    }
};
let fundownPass = () => {
    if (text[1].value == "") {
        lable[1].classList.remove("move-up");
        lable[1].style.transition = "transform .3s linear";
    }
};

let funReset = (e) => {
    if (text[0].value == "" && text[1].value == "") {
        alert("All Fields already empty !");
        e.preventDefault();
    } else {
        let respond = confirm("You are sure to clear all Info !");
        if (!respond) {
            e.preventDefault();
        }
    }
};
let showPass = document.querySelector(".icon-eye");

showPass.onmouseover = () => {
    text[1].type = "text";
    showPass.classList.remove("icon-eye");
    showPass.classList.add("icon-eye-blocked");
    showPass.style.color = "#5fa8d3";
};
showPass.onmouseout = () => {
    text[1].type = "password";
    showPass.classList.remove("icon-eye-blocked");
    showPass.classList.add("icon-eye");
    showPass.style.color = "#333";
};