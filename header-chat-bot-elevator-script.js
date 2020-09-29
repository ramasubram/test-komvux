//FOR STICKY HEADER & ELEVATOR BUTTON

// When the user scrolls, run the function
window.onscroll = function() {fixStickyHeader()};

// Assign the header and elevator buttons to variables so we can assign new classes later
var header = document.getElementById("sticky-header");
var elevator = document.getElementById("scroll-elevator");

// Get the offset position of the header
var sticky = header.offsetTop;

// Add the sticky class to the header & elevator button when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixStickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    elevator.classList.add("scroll-elevator-sticky")
  } else {
    header.classList.remove("sticky");
    elevator.classList.remove("scroll-elevator-sticky")
  }
}

// FOR CHAT BOT

// Add on click listener to the chat-box button
document.getElementById("chat-clickme").addEventListener("click", openChat);

// If chat bot box display is none, display chat bot box, else hide
function openChat() {
    var chatBox = document.getElementById("chat-clickme-display");
    if (chatBox.style.display === "block") {
      chatBox.style.display = "none";
    } else {
      chatBox.style.display = "block";
    }
}

// Add on click listener to the chat-box close button
document.getElementById("chat-box-close").addEventListener("click", closeChat);

// Set display to none
function closeChat() {
    var chatBox = document.getElementById("chat-clickme-display");
    chatBox.style.display = "none";
}
