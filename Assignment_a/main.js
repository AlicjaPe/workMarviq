
/* that function is needed for navigation */


function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}



var display = document.getElementById('display');
/*var output = document.getElementById('display');*/
/* Machines.Machine.forEach(function (data) {
     output.innerHTML + = data.MACHINE + " " + data.DOWNTIME_PERCENTAGE + "<br>"
 })
var data = JSON.parse(values);
var Server = data.result[0];
console.log(Server.MACHINE + " " + Server.DOWNTIME_PERCENTAGE);
var output = document.getElementById('display');
Machines.Machine.forEach(function (data) {
    output.innerHTML + = data.MACHINE + " " + data.DOWNTIME_PERCENTAGE + "<br>"
})*/