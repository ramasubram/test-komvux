// FOR ACCORDION MENU

// Assign questionsListItem(for accordion) to questions-list-item and i to zero.
var questionsListItem= document.getElementsByClassName("questions-list-item");
var i;


// Loop through each of the question-list-item elements
for (i = 0; i < questionsListItem.length; i++) {
    
    // Add an on-click listener to each of the question-list-item elements
    questionsListItem[i].addEventListener("click", function() {
    
    
    
    // Assign the element with plus-icon as a class within this div to icon
    var icon = this.lastChild; //THIS DOES NOT WORK :(    


    
    // Assign the accordion panel (next element in the div) to panel
    var panel = this.nextElementSibling;

    // If panel is currently displayed, hide the panel
    if (panel.style.display === "block") {

        panel.style.display = "none";
       
       
        // icon.classList.remove('fa-minus-circle');
        // icon.classList.add('fa-plus-circle');

    // Else if panel is currently hidden, display the panel
    } else {
        panel.style.display = "block";
        
        
        // icon.classList.add('fa-minus-circle');
        //icon.classList.remove('fa-plus-circle');
    }
  });
}