document.querySelector('video').playbackRate = .8;

const backToTopButton = document.querySelector("#backToTheTopBtn");

window.addEventListener("scroll", scrollFunction); 

function scrollFunction() {
    if (window.pageYOffset > 300) { // Show backToTopButton
      if(!backToTopButton.classList.contains("btnIntro")) { 
        backToTopButton.classList.remove("btnEnd");
        backToTopButton.classList.add("btnIntro"); 
        backToTopButton.style.display = "block";
      }
    }
    else { // Hide backToTopButton
      if(backToTopButton.classList.contains("btnIntro")) {
        backToTopButton.classList.remove("btnIntro"); 
        backToTopButton.classList.add("btnEnd");
        setTimeout(function() {
          backToTopButton.style.display = "none";
        }, 250); 
      }
    }
}

backToTopButton.addEventListener("click", backTop);


function backTop() {
    window.scrollTo(0,0);
}

const sidebar = document.querySelector("#icons-container");

window.addEventListener("scroll", sidebarScroll); 

function sidebarScroll() {
    if (window.pageYOffset > 650) { // Show sidebar
      if(!sidebar.classList.contains("sidebarIntro")) { 
        sidebar.classList.remove("sidebarEnd");
        sidebar.classList.add("sidebarIntro"); 
        sidebar.style.display = "block";
      }
    }
    else { // Hide sidebar
      if(sidebar.classList.contains("sidebarIntro")) {
        sidebar.classList.remove("sidebarIntro"); 
        sidebar.classList.add("sidebarEnd");
      }
    }
}

function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll=function(){};
}