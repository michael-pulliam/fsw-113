// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var monthList = document.querySelector("#month");
var inputYear = document.querySelector("#year");
var submit = document.querySelector("#submit");
monthList.value = months[0]
inputYear.value = new Date().getFullYear();
window.addEventListener("load", function(){
for (i = 0; i < months.length; i++){
   var monthOption = document.createElement("option");
   monthOption.value = months[i]
   monthOption.innerText = `${months[i]}`
   monthList.appendChild(monthOption);
   printCalendar();
}
})

function printCalendar(){
    const today = new Date(`${monthList.value}/1/${inputYear.value}`)
    const month = today.getMonth()
    let days
    switch (month) {
        case 1:
            days = 28
            break
        case 3:
        case 5:
        case 8: 
        case 10:
            days = 30
            break
        default:
            days = 31
    }

    document.getElementById('calendarDays').innerHTML = ""
    let x
    const weekday = today.getDay()
    for (x = 0; x < weekday; x++){
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    }

    let dt = 0
    do {
        dt++
        document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
    } while ( dt < days)

    const monthName = today.toLocaleDateString('default', {month:'long'})
    const year = today.getFullYear()
    document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

    const remainder = (7 - ((x + dt) % 7))
    let y = 0
    while ( y < remainder) {
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
        y++
    }

};

submit.addEventListener("click", printCalendar);