// Declare any necessary variables.

// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.querySelector("#print").addEventListener("click", newStudent)
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.querySelector("#reset").addEventListener("click", reset);

function reset(){
    var clearForm = [...document.querySelectorAll("input")]
        clearForm.forEach(e =>(e.value = ""))
    var clearCert = [...document.querySelectorAll(".cert-data")]
        clearCert.forEach(e => (e.textContent = ""))
}

function newStudent(){
    let myStudent = new student(document.querySelector("#studentName").value,
                                document.querySelector("#className").value,
                      myConvert(document.querySelector("#studentScores").value,
                                document.querySelector("#possibleScores").value))
                                console.log(newStudent)
    certStudent(myStudent)
    
}
// Create a function that instantiates a new student object with the input from the HTML form.

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function certStudent(info){
    document.querySelector("#certStudentName").textContent = info.getStudentName;
    document.querySelector('#certClassName').textContent = info.getStudentCourse;
    document.querySelector("#certGrade").textContent = info.convertScores;

 
}
// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.

function myConvert(arry){
    arry.split(",").map(e => parseInt(e))
}