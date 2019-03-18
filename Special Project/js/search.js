var input = document.getElementById("search-employee");
var list = document.getElementById("search-result");

function getSearchedEmployee() {

    if (input.value) {

        var employeeRef = firebase.database().ref('employees/');
        employeeRef.orderByKey().on('child_added', function (snap) {
            var lastName = snap.val().lastName;
            var firstName = snap.val().firstName;

            if (lastName.toUpperCase().includes(input.value.toUpperCase()) ||
                firstName.toUpperCase().includes(input.value.toUpperCase())) {

                var item = document.createElement('li');
                item.appendChild(document.createTextNode(firstName + ' ' + lastName));

                list.appendChild(item);
            }
        })
    }
}