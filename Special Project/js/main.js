// var bigOne = document.getElementById('bigOne');
// var dbRef = firebase.database().ref().child('text');
// dbRef.on('value', snap => bigOne.innerText = snap.val());

var employeeForm = document.getElementById('employee-form');
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var contactNumber = document.getElementById('contact-number');
var address = document.getElementById('address');
var supervisor = document.getElementById('supervisor');

$(document).ready(function () {
        getEmployeeList();
});

function getEmployeeList() {

        var employeeRef = firebase.database().ref('employees/');
        employeeRef.orderByKey().on('child_added', function (snap) {
                var el = document.createElement("option");
                el.textContent = snap.val().lastName;
                el.value = snap.val().lastName;
                supervisor.appendChild(el);
        })
}

function addNewEmployee(firstName, lastName, contactNumber, address, supervisor) {
        // An employee entry.
        var employeeData = {
                firstName: firstName,
                lastName: lastName,
                contactNumber: contactNumber,
                address: address,
                supervisor: supervisor
        };

        firebase.database().ref().child('employees').push().set(employeeData);

}

employeeForm.onsubmit = function (e) {
        e.preventDefault();
        if (firstName.value && lastName.value && contactNumber.value && address.value &&
                supervisor.value) {

                addNewEmployee(firstName.value, lastName.value, contactNumber.value,
                        address.value, supervisor.value)
                firstName.value = "";
                lastName.value = "";
                contactNumber.value = "";
                address.value = "";
        }
}
