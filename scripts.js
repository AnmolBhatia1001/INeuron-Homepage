
var darkBtn = document.getElementById("dark-btn");
var navLink = document.querySelector(".nav-item");
var header = document.getElementById("header");
var logoLight = document.getElementById("light");
var logoDark = document.getElementById("dark");
var workWith = document.querySelector(".work-with")
var hack = document.querySelector(".hackathon")

function darkTheme(){
    document.body.style.backgroundColor = "#101426";
    document.body.style.color = "white";
    darkBtn.innerHTML="Light Mode";
    darkBtn.style.backgroundColor="white";
    darkBtn.style.color="black";
    header.style.backgroundColor = "#233C7B";
    navLink.style.color="white";
    logoLight.style.display = "block";
    logoDark.style.display = "none";
    workWith.style.backgroundColor = "#233C7B";
    hack.style.backgroundColor = "#233C7B";

}

function lightTheme(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    darkBtn.innerHTML="Dark Mode";
    darkBtn.style.backgroundColor="#101426";
    darkBtn.style.color="white";
    header.style.backgroundColor = "white";
    navLink.style.color="black";
    logoLight.style.display = "none";
    logoDark.style.display = "block";
    workWith.style.backgroundColor = "#EEF0F5";
    hack.style.backgroundColor = "#EEF0F5";
}

function checkColor(){


    if(document.body.style.backgroundColor === "white"){
        darkTheme();
    }else {
        lightTheme();
    } 

}

darkBtn.addEventListener('click',checkColor)
    



// function onClickMenu(){
//     document.getElementById("menu").classList.toggle("icon");
//     document.getElementById("nav").classList.toggle("change");
// }