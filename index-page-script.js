//FOR SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//FOR EVENTS BUTTONS

//Setting arrays of event titles, dates and times
var eventTitles = ["Utställning: Josef Franks flora", "Utställning: Passion för pelargon", "Internationella suicidpreventionsdagen – 10 september", "Barnvagnsvisning i Från gryning till skymning – nordisk konst kring sekelskiftet 1900", "Soppteater", "DigiDax", "INSTÄLLT – Måndagscanasta", "Rita Digitalt", "Konsten att måla på riktigt", "Sagoyoga", "Må bra aktivitet för dig som anhörig", "Sagoyoga 2", "INSTÄLLT – Tisdagscanasta", "IT-Kojan", "Öppen ateljé – workshop 7–11 år", "INSTÄLLT – Tågagruppen, målning", "Stora drömspelet", "Babymusik – workshop", "Stavgång", "AR–Workshop med Herman Fredlund", "Teknikguide på Idé A", "IT-Kojan Rosengården", "IT-klubben", "Läxhjälp"];
var eventDates = ["4-20", "7-20", "Idag", "Idag", "Idag", "Idag", "14", "14", "14", "15", "15", "15", "15", "15", "15", "15", "16", "16", "16", "16", "16", "16", "16", "16"];
var eventTimeOrMonth = ["sep", "sep", "08:00", "10:00", "12:15", "14:00", "sep", "sep", "sep", "sep", "sep", "sep", "sep", "sep", "sep", "sep", "sep", "sep", "sep", "sep", "sep", "sep", "sep", "sep"]

//Adding event listeners to each of the number buttons
document.getElementById("event-page-number-1").addEventListener("click", eventPage1);
document.getElementById("event-page-number-2").addEventListener("click", eventPage2);
document.getElementById("event-page-number-3").addEventListener("click", eventPage3);
document.getElementById("event-page-number-4").addEventListener("click", eventPage4);
document.getElementById("event-page-number-prev").addEventListener("click", eventPagePrev);
document.getElementById("event-page-number-next").addEventListener("click", eventPageNext);

//Assigning the HTML elements to variables
var eventTitleInfo = document.getElementsByClassName("event-description");
var eventDateInfo = document.getElementsByClassName("when");
var eventTimeInfo = document.getElementsByClassName("month-or-time");

var currentPage = 1;

//Each function depending on the page number clicked ***Is it possible here to use an if statement to set i and or k (i + 6) and therefore only require one function??**
function eventPage1() {
    var i = 0;
    for (i = 0; i < eventTitleInfo.length; i++) {
        //Removing and adding the page-numbers-active class to the HTML elements
        var removeActiveClass = document.getElementsByClassName("page-numbers-active");
        removeActiveClass[0].classList.remove("page-numbers-active");
        var addActiveClass = document.getElementById("event-page-number-1").firstElementChild;
        addActiveClass.classList.add("page-numbers-active");

        //Iterating through the array to update the innerHTML
        eventTitleInfo[i].innerHTML = "<i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i>" + eventTitles[i];
        eventDateInfo[i].innerHTML = eventDates[i];
        eventTimeInfo[i].innerHTML = eventTimeOrMonth[i];
    }
    currentPage = 1;
}

function eventPage2() {

    var removeActiveClass = document.getElementsByClassName("page-numbers-active");
    removeActiveClass[0].classList.remove("page-numbers-active");
    var addActiveClass = document.getElementById("event-page-number-2").firstElementChild;
    addActiveClass.classList.add("page-numbers-active");

    var i = 6;
    for (i = 6; i < (eventTitleInfo.length + 6); i++) {
        eventTitleInfo[i - 6].innerHTML = "<i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i>" + eventTitles[i];
        eventDateInfo[i - 6].innerHTML = eventDates[i];
        eventTimeInfo[i - 6].innerHTML = eventTimeOrMonth[i];
    }
    currentPage = 2;
}

function eventPage3() {

    var removeActiveClass = document.getElementsByClassName("page-numbers-active");
    removeActiveClass[0].classList.remove("page-numbers-active");
    var addActiveClass = document.getElementById("event-page-number-3").firstElementChild;
    addActiveClass.classList.add("page-numbers-active");

    var i = 12;
    for (i = 12; i < (eventTitleInfo.length + 12); i++) {
        eventTitleInfo[i - 12].innerHTML = "<i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i>" + eventTitles[i];
        eventDateInfo[i - 12].innerHTML = eventDates[i];
        eventTimeInfo[i - 12].innerHTML = eventTimeOrMonth[i];
    }
    currentPage = 3;
}

function eventPage4() {

    var removeActiveClass = document.getElementsByClassName("page-numbers-active");
    removeActiveClass[0].classList.remove("page-numbers-active");
    var addActiveClass = document.getElementById("event-page-number-4").firstElementChild;
    addActiveClass.classList.add("page-numbers-active");

    var i = 18;
    for (i = 18; i < (eventTitleInfo.length + 18); i++) {
        eventTitleInfo[i - 18].innerHTML = "<i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i>" + eventTitles[i];
        eventDateInfo[i - 18].innerHTML = eventDates[i];
        eventTimeInfo[i - 18].innerHTML = eventTimeOrMonth[i];
    }
    currentPage = 4;
}

function eventPageNext() {
    if (currentPage == 1) {
        eventPage2();
    } else if (currentPage == 2) {
        eventPage3();
    } else if (currentPage == 3) {
        eventPage4();
    } else {
        alert("For more events, please hit the more events button to the right!")
    }
}

function eventPagePrev() {
    if (currentPage == 2) {
        eventPage1();
    } else if (currentPage == 3) {
        eventPage2();
    } else if (currentPage == 4) {
        eventPage3();
    } else {
        alert("You're already on the first page!")
    }
}