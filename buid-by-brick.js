var slide=document.querySelector("#proj-img");
var imageNum=document.querySelector(".proj-num");
var leftArrow=document.querySelector("#arrow-left");
var rightArrow=document.querySelector("#arrow-right");
var popUp=document.querySelector(".help-popup");
var theForm=document.querySelector(".form-block");
var helpCancel=document.querySelector("#popup-cancel");
var formCancel=document.querySelector("#form-cancel");
var submitForm=document.querySelector("#form-submit");


var menuIcon=document.querySelector(".menu-drop");
var mobileSlide=document.querySelector(".mobile-slide");

var introImage=document.querySelector(".intro-image");


var menuClicks=0
menuIcon.onclick=function() {
    if(menuClicks==0) {
		mobileSlide.style.transform="translateY(10rem)";
    mobileSlide.style.transition="transform 0.5s ease";
	
	//introImage.style.transform="translateY(10rem)";
		introImage.style.transform="translateY(-25rem)";
		
		
    introImage.style.transition="transform 0.5s ease-in";
		
		
		
		
		menuClicks=1
	}
	else {
		mobileSlide.style.transform="translateY(-10rem)";
    mobileSlide.style.transition="transform 0.5s ease-in-out";
	
	introImage.style.transform="translateY(0rem)";
    introImage.style.transition="transform 0.3s ease-in-out";
		
		menuClicks=0
	}
	
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


window.onload=myImages();
window.onload=helpPopUp();