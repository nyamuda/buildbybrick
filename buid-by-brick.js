var slide=document.querySelector("#proj-img");

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
var linkAndSendMessage=document.querySelector("#help-link");

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

var wordsNum=0;
function helpPopUp() {
    setTimeout(function() {
        popUp.style.transform="scale(1,1)";
    },2000)
}
popUp.onclick=function() {
	
    popUp.style.display="none";
	
	linkAndSendMessage.href="";
	
	
    
}
helpCancel.onclick=function() {
    popUp.style.transform="scale(0)";
    popUp.style.transition="transform 0.5s ease-in-out";
  
}

leftArrow.onclick=function() {
            --numImage;
    if(numImage==0) {
        numImage=22;
        slide.src="images/img ("+numImage+").jpg";
        
    }
    else if(numImage<=22) {
            slide.src="images/img ("+numImage+").jpg";
            
            
        }
    else {
            numImage=1;
            slide.src="images/img ("+numImage+").jpg";
          
        }
};
rightArrow.onclick=function() {
            ++numImage;
    if(numImage<=22) {
            slide.src="images/img ("+numImage+").jpg";
           
        }
    else {
            numImage=1;
            slide.src="images/img ("+numImage+").jpg";
        
        }
};


function myImages() {
    setInterval(function() {
        ++numImage;
        if(numImage<=22) {
            slide.src="images/img ("+numImage+").jpg";
            
        }
        else {
            numImage=1;
            slide.src="images/img ("+numImage+").jpg";
          
        }
    },5000)
}


window.onload=myImages();
window.onload=helpPopUp();