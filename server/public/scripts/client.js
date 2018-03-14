//Classes
class Employee {
  constructor(fNameIn, lNameIn, idNumIn, jobTitleIn, annualSalaryIn) {
    this.fName = fNameIn;
    this.lName = lNameIn;
    this.idNum = idNumIn;
    this.jobTitle = jobTitleIn;
    this.annualSalary = annualSalaryIn;
  }
}

//Global Variables
let allWorkers = [];

//run when document is ready.
$(document).ready(readyNow);

//readynow function.
function readyNow() {
eventHandler();
}
// eventHandler function.
function eventHandler() {
  $('#submitButton').on('click', addWorker);
  $('#removeButton').on('click', removeEmployeeArray);
}
//functions for eventHandler
function addWorker() {
createEmoployee();
updateDom();
}
function createEmoployee() {
  //inputs
  let fNameIn = $('#fnInput').val();
  let lNameIn = $('#lnInput').val();
  let idNumIn = $('#idInput').val();
  let jobTitleIn = $('#titleInput').val();
  let annualSalaryIn = $('#salaryInput').val();
  //inputs into class constructor
  if (fNameIn === "") {
    $('#fnInput').prop('required', true);
  } else if (lNameIn === "") {
    $('#lnInput').prop('required', true);
  } else if (idNumIn === "") {
    $('#idNumIn').prop('required', true);
  } else if (jobTitleIn === "") {
    $('#titleInput').prop('required', true);
  } else if (annualSalaryIn === "") {
    $('#salaryInput').prop('required', true);
  } else {

    let worker = new Employee (fNameIn, lNameIn, idNumIn, jobTitleIn, annualSalaryIn);
    allWorkers.push(worker);
  }

}
function calcTotalSalary() {
  let totalSalary = 0;
  for (var i = 0; i < allWorkers.length; i++) {
    totalSalary += parseInt(allWorkers[i].annualSalary);
  }//loop through array of allworkers and update total salary
  $('#totalSalary').empty();
  if ((totalSalary/12) > 20000) {
    $('#totalSalary').append('<h3 class="redSalary">Total Monthly Salary Cost: $' + (totalSalary.toFixed(2) / 12) + '</h3>');
  }// compare total salary and append to dom
  else if ((totalSalary/12) <= 20000) {
    $('#totalSalary').append('<h3 class="greenSalary">Total Monthly Salary Cost: $' + (totalSalary.toFixed(2) / 12) + '</h3>');
  }// compare total salary and append to dom
}
function updateDom() {
  $('#tableBody').empty();
  for (let worker of allWorkers) {
    $('#tableBody').append('<tr class="worker Info">' + '<td class="worker data">' + worker.fName + '</td>' +
                          '<td class="worker data">' + worker.lName + '</td>' +
                          '<td class="worker data" id="empId">' + worker.idNum + '</td>' +
                          '<td class="worker data">' + worker.jobTitle + '</td>' +
                          '<td class="worker data">' + worker.annualSalary + '</td>' + '</tr>');
                        }// loop through allworkers array and append each worker to dom.
  calcTotalSalary();// update total salary
}
function removeEmployeeArray() {
  let inputEmployee = $('#removeInput').val();
  for (var i = 0; i < allWorkers.length; i++) {
    if (inputEmployee === allWorkers[i].idNum) {
      allWorkers.splice(i, 1);
    }// takes user input and matches empId to the worker in array and removes them
    //from the array.
  }updateDom();// this will then update the total salary and table with the people
  //that are left over in the array.
}
