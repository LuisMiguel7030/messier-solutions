window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let x = document.getElementById("navbar");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        x.className = "topnav white";
    } 
    else if(window.location.href === 'http://localhost:8080/contact'){
        x.className = "topnav text-white";
    }
    else {
        x.className = "topnav";
    }
}