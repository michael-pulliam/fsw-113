// declare any necessary variables
let queryType
let itemID
// define a function called 'fetchData()' that passes the values from 
function fetchData() {
    queryType = document.querySelector("#queryType").value;
    itemID = document.querySelector("#itemID").value;
    getFromSWAPI();
}
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function getFromSWAPI() {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
   
}
// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.
function updateInfo(data){
    var oj = Object.keys(data);
    document.querySelector("#dataLabel1").textContent = `${oj[0]}:`
    document.querySelector("#dataValue1").textContent = `${data[oj[0]]}`
    document.querySelector("#dataLabel2").textContent = `${oj[3]}:`
    document.querySelector("#dataValue2").textContent = `${data[oj[3]]}`
}