// let tabHeader = document.getElementsByClassName("tab-header")[0];
// let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
// let tabBody = document.getElementsByClassName("tab-body")[0];

// let tabsPane = tabHeader.getElementsByTagName("div");

// for(let i=0;i<tabsPane.length;i++){
//   tabsPane[i].addEventListener("click",function(){
//     tabHeader.getElementsByClassName("active")[0].classList.remove("active");
//     tabsPane[i].classList.add("active");
//     tabBody.getElementsByClassName("active")[0].classList.remove("active");
//     tabBody.getElementsByTagName("div")[i].classList.add("active");
    
//     tabIndicator.style.left = `calc(calc(100% / 3) * ${i})`;
//   });
// }

const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


function openFirst() {
    // content1.style.transform = "translateX(0)";
    // content2.style.transform = "translateX(100%)";
    // content3.style.transform = "translateX(100%)";
    btn1.style.borderBottom = "3px solid green"
    btn2.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
    btn1.style.fontWeight = "bold"
    btn2.style.fontWeight = "400";
    btn3.style.fontWeight = "400";
    // content1.style.transform="scale(0.9)";
    // content1.style.transition="opacity 500ms ease-in-out 0ms, transform 500ms ease-in-out 0ms";
    // content1.style.transitionDelay = "0.3s";
    // content2.style.transitionDelay = "0s";
    // content3.style.transitionDelay = "0s";
    // content2.style.display = "block";
    // content3.style.display = "none";

    
}
function openSecond() {
    // content1.style.transform = "translateX(100%)";
    // content2.style.transform = "translateX(0)";
    // content3.style.transform = "translateX(100%)";
    btn2.style.borderBottom = "3px solid green"
    btn1.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
    btn2.style.fontWeight = "bold"
    btn1.style.fontWeight = "400";
    btn3.style.fontWeight = "400";
    content2.style.display = "block";
    // content1.style.transitionDelay = "0s";
    // content2.style.transitionDelay = "0.3s";
    // content3.style.transitionDelay = "0s";
    // content1.style.display = "none";
    // content3.style.display = "none";
    
}
function openThird() {
    // content1.style.transform = "translateX(100%)";
    // content2.style.transform = "translateX(100%)";
    // content3.style.transform = "translateX(0)";
    content3.style.display = "block";
     btn3.style.borderBottom = "3px solid green"
    btn2.style.borderBottom = "none";
    btn1.style.borderBottom = "none";
    btn3.style.fontWeight = "bold"
    btn2.style.fontWeight = "400";
    btn1.style.fontWeight = "400";
    // content3.style.transform="scale(0.9)";
    // content3.style.transition="opacity 500ms ease-in-out 0ms, transform 500ms ease-in-out 0ms";
    // content1.style.transitionDelay = "0s";
    // content2.style.transitionDelay = "0s";
    // content3.style.transitionDelay = "0.3s";
    // content2.style.display = "none";
    // content1.style.display = "none";
}
