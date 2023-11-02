document.querySelector('form').addEventListener("submit",myEmployee);
let total=0
function myEmployee(){
  event.preventDefault();
  let Name=document.querySelector("#name").value
  let EmployeeId=document.querySelector("#employee_id").value
  let Department=document.querySelector("#department").value
  let Experience=document.querySelector("#experience").value
  let Email=document.querySelector("#email").value
  let Mobile=document.querySelector("#mobile").value


  let EmployeeObj={
    Name:Name,
    EmployeeId:EmployeeId,
    Department:Department,
    Experience:Experience,
    Email:Email,
    Mobile:Mobile,
  };
displayTable(EmployeeObj);
total++
console.log(total)
document.querySelector("#total-employee").innerText=total
}

function displayTable(EmployeeObj) {

var tr = document.createElement("tr");
var td1 = document.createElement("td");
td1.innerText = EmployeeObj.Name;

var td2 = document.createElement("td");
td2.innerText = EmployeeObj.EmployeeId;

var td3 = document.createElement("td");
td3.innerText = EmployeeObj.Department;

var td4 = document.createElement("td");
td4.innerText = EmployeeObj.Experience;

var td5 = document.createElement("td");
td5.innerText = EmployeeObj.Email;

var td6 = document.createElement("td");
td6.innerText = EmployeeObj.Mobile;


let td7=document.createElement('td')
td7.innerText=EmployeeObj.Experience
if(EmployeeObj.Experience>5){
  td7.innerText="Senior"
}
else if(EmployeeObj.Experience>=2 && EmployeeObj.Experience<=5){
  td7.innerText="Junior"
}
else if(EmployeeObj.Experience<=1){
  td7.innerText="Trainee"
}

var td8 = document.createElement("td");
td8.innerText = "Delete";

td8.addEventListener("click", deleteRow);
td8.style.backgroundColor = "orange";
tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
document.querySelector("tbody").append(tr);
;
}

function deleteRow() {
event.target.parentNode.remove();
total--
console.log(total)
document.querySelector("#total-employee").innerText=total

}