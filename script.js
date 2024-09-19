const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")

function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!")/*shows error message when we havent wriiten anything */
    }
    else{
        let li = document.createElement("li"); /* creates a new list item element (<li>).*/
        li.innerHTML =inputBox.value;/*Set the content of the list item to the input value*/
        listContainer.appendChild(li);/*Add the new list item to the list */
        let span=document.createElement("span");/* we are span tag for cross icon */
        span.innerHTML="\u00d7";/* this code is for cross icon */
        li.appendChild(span);
    }
    inputBox.value="";//After a task is added to the list (when the user provides input), this line resets the input box so that it’s empty for the next task. It ensures that users see a blank input field after they add a task, making it clear that they can type a new task.*/
    saveData(); //Whenever we will add new tasks it should call savedata to save the data in the browser
}
listContainer.addEventListener("click", function(e){// function(e) defines an event listener that reacts to clicks on the listContainer, and e is the event object.
    if(e.target.tagName ==="LI"){//The tagName property always returns the tag name in uppercase
        e.target.classList.toggle("checked");// This method checks if the class "checked" is already present on the element. If it is, it removes it; if it isn't, it adds it.
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();// when the task is deleted we will add the new data
    }
    
}, false);//bubbling
//So, false will trigger when:
//You click on either the <li> or <span>, and the event first occurs on that target element.
//The event then "bubbles up" to listContainer, where the event listener will run.
//Bubbling (false) means the event first reaches the target element and then bubbles up, allowing parent elements to react afterward.
// The <span> tag is an inline element, which means it won’t create a new line or block in the layout. This is useful for adding small elements (like icons) without affecting the flow of text or other inline elements.

// we are making this function save data because whenever we refresh the browser our data should be there.
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//we need to display the data whenever we open the website again
 function showTask(){
    listContainer.innerHTML =localStorage.getItem('data');
 }
 showTask();