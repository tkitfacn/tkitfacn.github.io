var laptopscrolls = document.querySelectorAll("#laptop_scroll");
var phonescrolls = document.querySelectorAll("#phone_scroll");

var render = function() {
    var scrolltop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    scrolltop -= 20;

    for(var i = 0; i < laptopscrolls.length; i++) {
        var layer = laptopscrolls[i];
        var y = (scrolltop - layer.offsetTop) * 0.1;
        layer.style.backgroundPosition = "0px " + y + "px";
        laptopPreviewes[i].style.backgroundPosition = "0px " + y + "px";
        //console.log(y);
    }
    scrolltop -= 140;
    for(var i = 0; i < phonescrolls.length; i++) {
        var layer = phonescrolls[i];
        var y = (scrolltop - layer.offsetTop) * 0.5;
        layer.style.backgroundPosition = "0px " + y + "px";
        //console.log(y);
    }
};

window.onscroll = function(){
    render();
};

setTimeout(function() {
    render();
}, 50);

var laptopPreviewes = document.querySelectorAll("#laptop_preview");
var imageCount = 0;
var updateImage = setInterval(function() {
    if (haircreatorImages.length == imageCount) imageCount = 0;
    else {
        var layer = laptopPreviewes[0];
        layer.style.backgroundImage = haircreatorImages[imageCount];
        imageCount++;
    }
    //console.log(haircreatorImages[imageCount]);
}, 3000);

//HairCreator
var haircreatorImages = ["url('media/images/content/haircreator/1.png')", "url('media/images/content/haircreator/2.png')", "url('media/images/content/haircreator/3.png')"];
