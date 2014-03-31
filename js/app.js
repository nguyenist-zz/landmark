

// On load we show first img only
$('.carousel img:first-child').addClass('active');

$('.showNext').on('click', function (){
    if ($('.active').is(':last-child')) {
        $('.carousel img:first-child').addClass('active');
        $('.carousel img:last-child').removeClass('active');
    } else {
        // go to next image
        $('.active').next().addClass('active').prev().removeClass('active');
    }

});


$('.showBack').on('click', function (){
    if ($('.active').is(':first-child')) {
        $('.carousel img:last-child').addClass('active');
        $('.carousel img:first-child').removeClass('active');
    } else {
        $('.active').prev().addClass('active').next().removeClass('active');
    }
});




/*var timer = setInterval(nextImage, 4000);*/

var curImage = 0;
var numImages = 5;


$('#container').click(function() {
/*function nextImage() {*/
    var e;
    // remove showMe class from current image
    e = document.getElementById("slideimg" + curImage);
    removeClass(e, "showMe");

    // compute next image
    curImage++;
    if (curImage > numImages - 1) {
        curImage = 0;
    }

    // add showMe class to next image
    e = document.getElementById("slideimg" + curImage);
    addClass(e, "showMe");
});

function addClass(elem, name) {
    var c = elem.className;
    if (c) c += " ";  // if not blank, add a space separator
    c += name;
    elem.className = c;
}

function removeClass(elem, name) {
    var c = elem.className;
    elem.className = c.replace(name, "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");  // remove name and extra blanks
}