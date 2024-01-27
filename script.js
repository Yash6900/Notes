const CurrDate = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();

const weekDays = ["Sunday" , "Monday"  , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

const allMonths =["January", "February" , "March" , "April" , "May" ,"June" , "July" ,"August" , "September" , "October" ,"November" ,"December"];

console.log(today)
CurrDate.innerHTML = (today.getDate()<10?"0":"")+today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();


const notesContainer = document.getElementById("notesContainer");
const createBtn = document.getElementById("notes-button");
let notes = document.querySelectorAll(".input-box")

function shownotes(){
    notesContainer.innerHTML  = localStorage.getItem("notes")
}

shownotes();

function updateStorage(){
    localStorage.setItem("notes" , notesContainer.innerHTML);
}


createBtn.addEventListener("click" , ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img")
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable" , "true");
    img.src = "https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/trashcan_delete_remove-256.png"
    // img.className="input-box img";
    notesContainer.appendChild(inputBox).appendChild(img)
;})

notesContainer.addEventListener("click" , function(e){
        if(e.target.tagName === "IMG"){
            e.target.parentElement.remove();
            updateStorage();
        } 
        else if(e.target.tagName === "P"){
            notes = document.querySelectorAll(".input-box")
            notes.forEach(nt=>{
                nt.onkeyup = function(){
                    updateStorage();
                }
            })
        }
})

document.addEventListener("keydown" , event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();