// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

class student{
    constructor(){
        this.name = document.querySelector("#studentName").value
        this.course = document.querySelector("#className").value
        this.scores = document.querySelector("#studentScores").value.split(",")
        this.pScores = document.querySelector("#possibleScores").value.split(",")
    }
    addScores(){
        myConvert(this.scores)
        score = this.scores.reduce((perValue, currValue) => (perValue + currValue))
    }
    addPossScores(){
        myConvert(this.pScores)
        possScores = this.pScores.reduce((perValue, currValue) => (perValue + currValue))

    }
    convertScores(totalScore, possiScore){
        if ((totalScore / possiScore) * 100 >= 100){
            document.querySelector("#certGrade").textContent = "A+"
        } else if ((totalScore / possiScore) * 100 >= 95 && (totalScore / possiScore) * 100 < 100){
            document.querySelector("#certGrade").textContent = "A-"
        }  else if ((totalScore / possiScore) * 100 >= 90 && (totalScore / possiScore) * 100 < 95){
            document.querySelector("#certGrade").textContent = "B+"
        }  else if ((totalScore / possiScore) * 100 >= 85 && (totalScore / possiScore) * 100 < 90){
            document.querySelector("#certGrade").textContent = "B-"
        }  else if ((totalScore / possiScore) * 100 >= 80 && (totalScore / possiScore) * 100 < 85){
            document.querySelector("#certGrade").textContent = "C+"
        }  else if ((totalScore / possiScore) * 100 >= 75 && (totalScore / possiScore) * 100 < 80){
            document.querySelector("#certGrade").textContent = "C-"
        }  else if ((totalScore / possiScore) * 100 >= 70 && (totalScore / possiScore) * 100 < 75){
            document.querySelector("#certGrade").textContent = "D+"
        }  else if ((totalScore / possiScore) * 100 >= 65 && (totalScore / possiScore) * 100 < 70){
            document.querySelector("#certGrade").textContent = "D-"
        } else {
            document.querySelector("#certGrade").textContent = "F"
        }
    }
}