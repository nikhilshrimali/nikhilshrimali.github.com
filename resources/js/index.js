var workButton = document.getElementById("work-button");
var page = document.getElementById("home-page");
var work = document.getElementById("work");
var header = document.getElementById("page-header");
var lbl = document.getElementById("lbl");

page.addEventListener("scroll", function(){
    console.log("scroll");
    lbl.innerText = (work.scrollTop * work.scrollTop) + "";
}, false);



workButton.addEventListener("click", function(){
    pageScrollAnim(header.clientHeight);

}, false);



var pageScrollAnim = function(t){
    if ((t - work.scrollTop)/10 < 1) {
        work.scrollTop = t;
    }
    else {
        work.scrollTop += (t - work.scrollTop)/10;
        setTimeout(function(){
            pageScrollAnim(t)
        }, 10);
    }
    lbl.innerText = (work.scrollTop * work.scrollTop) + "";
}
