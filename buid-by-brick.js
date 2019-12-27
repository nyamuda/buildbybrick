var slide=document.querySelector("#proj-img");
var imageNum=document.querySelector(".proj-num");
var leftArrow=document.querySelector("#arrow-left");
var rightArrow=document.querySelector("#arrow-right");
var aboutLink=document.querySelector("#about-link");
var aboutBlock=document.querySelector(".about-us-block");
var aboutCancel=document.querySelector("#about-cancel");
var popUp=document.querySelector(".help-popup");
var theForm=document.querySelector(".form-block");
var helpCancel=document.querySelector("#popup-cancel");
var formCancel=document.querySelector("#form-cancel");
var submitForm=document.querySelector("#form-submit");
var contactMobile=document.querySelector("#contact-mobile");
var mobilePhone=document.querySelector(".mobile-phone");
var menuIcon=document.querySelector(".menu-drop");
var mobileBlock=document.querySelector(".mobile-block");
var mobileSlide=document.querySelector(".mobile-slide");
var arrowContact=document.querySelector("#mobile-arrow");
var cancelMobile=document.querySelector("#cancel-mobile-slide");
contactMobile.onclick=function() {
    if(mobilePhone.style.transform==='scale(1,1)') {
        mobilePhone.style.transform="scale(0,0)";
        arrowContact.innerHTML="&#9658;";
    }
    else {
        mobilePhone.style.transform="scale(1,1)";
        arrowContact.innerHTML="&#9660;";
    
    }
}
menuIcon.onclick=function() {
    mobileBlock.style.transform="translateX(-110vw)";
    mobileSlide.style.transform="translateX(-50vw)";
    mobileSlide.style.transition="transform 0.5s ease-in-out";
}
cancelMobile.onclick=function() {
    mobileBlock.style.transform="translateX(110vw)";
    mobileSlide.style.transform="translateX(50vw)";
    mobileSlide.style.transition="transform 0.5s ease-in-out";
    
}


var numImage=1;
var texts=["1.tiles","2.bulding","3.painting","4.house","5.flat","6.car mantainance"];
var wordsNum=0;
function helpPopUp() {
    setTimeout(function() {
        popUp.style.transform="translateX(-90vw)";
        popUp.style.transition="all 0.5s ease-in-out";
        popUp.style.position="fixed";
    },2000)
}
popUp.onclick=function() {
    popUp.style.display="none";
    theForm.style.transform="translateX(-110vw)";
    theForm.style.transition="transform 0.5s ease-in-out";
    theForm.style.position="fixed";
}
helpCancel.onclick=function() {
    popUp.style.transform="translateX(60vw)";
    popUp.style.transition="transform 0.5s ease-in-out";
    theForm.style.display="none";
}
formCancel.onclick=function() {
    theForm.style.transform="translateX(110vw)";
    theForm.style.transition="transform 0.5s ease-in-out";
    
}
submitForm.onclick=function(event) {
    theForm.style.transform="translateX(110vw)";
    theForm.style.transition="transform 0.5s ease-in-out";
    event.preventDefault();
}

leftArrow.onclick=function() {
            --numImage;
    if(numImage==0) {
        numImage=22;
        slide.src="images/img ("+numImage+").jpg";
        imageNum.innerText=texts[numImage-1] 
    }
    else if(numImage<=22) {
            slide.src="images/img ("+numImage+").jpg";
            imageNum.innerText=texts[numImage-1];
            
        }
    else {
            numImage=1;
            slide.src="images/img ("+numImage+").jpg";
            imageNum.innerText=texts[numImage-1]
        }
};
rightArrow.onclick=function() {
            ++numImage;
    if(numImage<=22) {
            slide.src="images/img ("+numImage+").jpg";
            imageNum.innerText=texts[numImage-1];
            
        }
    else {
            numImage=1;
            slide.src="images/img ("+numImage+").jpg";
            imageNum.innerText=texts[numImage-1]
        }
};


function myImages() {
    setInterval(function() {
        ++numImage;
        if(numImage<=22) {
            slide.src="images/img ("+numImage+").jpg";
            imageNum.innerText=texts[numImage-1];
            
        }
        else {
            numImage=1;
            slide.src="images/img ("+numImage+").jpg";
            imageNum.innerText=texts[numImage-1];
        }
    },5000)
}
aboutLink.onclick=function() {
    aboutBlock.style.transform="translateY(150vh)";
    aboutBlock.style.transition="transform 0.6s ease-in-out";
    aboutBlock.style.position="fixed";
    
}
aboutCancel.onclick=function() {
    aboutBlock.style.transform="translateY(-150vh)";
    aboutBlock.style.transition="transform 0.8s ease-in-out";
    aboutBlock.style.position="absolute";
    
}

window.onload=myImages();
window.onload=helpPopUp();