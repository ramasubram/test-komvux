//  Javascript for Gallery that slides through multiple images
//  In this example, list of 5 images are used
//  while using this script template 3 arrays need to be changed
//  They are images, arrCaptionTitle, arrCaptionText 

var { num, images} = listSlider();
  
//  Gallery slider values
function listSlider() {
    var images = [
        "slider-komvux-helsingborg-1.jpg",
        "slider-komvux-helsingborg-2.jpg",
        "slider-komvux-helsingborg-3.jpg",
        "slider-komvux-helsingborg-4.jpg",
        "slider-komvux-helsingborg-5.jpg",
        "slider-komvux-helsingborg-6.jpg",
        "slider-komvux-helsingborg-7.jpg",
        "slider-komvux-helsingborg-8.jpg",
        "slider-komvux-helsingborg-9.jpg",
        "slider-komvux-helsingborg-10.jpg"
    ];
    var num = 0;
    return { num, images};
}

/* Next button actions. change picture, title and text.
    Move to the next item in the list*/
function next() {
    num++;
    if(num >= images.length) {
        num = 0;
    }
    displayContents();
}

/* Prev button actions. change picture, title and text.
    Move to the previous item in the list*/
function prev() {
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    displayContents();
}

function callDisplayContents(i) {
    num = i;
    displayContents();
}

/* change html contents for picture, title and text. */
function displayContents() {
    var slider = document.getElementById("slider");
    slider.src = images[num];
}