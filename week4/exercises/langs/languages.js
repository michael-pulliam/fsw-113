const lang = "JavaScript"

document.querySelector("#submit").addEventListener("click", inputData);

function inputData(){
    myArry = [
    ...document.querySelector('#lang0').value.split(),
    ...document.querySelector('#lang1').value.split(),
    ...document.querySelector('#lang2').value.split(),
    ...document.querySelector('#lang3').value.split(),
    ...document.querySelector('#lang4').value.split(),
    ...document.querySelector('#lang5').value.split(),
    ...document.querySelector('#lang6').value.split(),
    ...document.querySelector('#lang7').value.split(),
    ];
    chkLang(myArry);
};
function chkLang(langs) {
    let result = langs.some(function(e, index){
        return(langs[index].toLowerCase()) == lang.toLowerCase()})
    console.log(result)
    let obj = document.querySelector('#TestResult')
    if (result === true) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}


