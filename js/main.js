$(document).ready(function () {

    // ============== Firebase ==============
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAtsKzX0nVjR7EX2V46N-wFq5lEikrjieY",
        authDomain: "employeedatamanagement-86221.firebaseapp.com",
        databaseURL: "https://employeedatamanagement-86221.firebaseio.com",
        projectId: "employeedatamanagement-86221",
        storageBucket: "employeedatamanagement-86221.appspot.com",
        messagingSenderId: "170634068198"
    };
    firebase.initializeApp(config);

    let database = firebase.database();

    $(document).on(``, `click`, function (event) {
        event.preventDefault();
        // Generate new table entry with: 
        // Name
        // Start Date
        // Months Worked
        // Monthly Rate in dollars
        // Total billed

        let emp = {
            name: $(``).val().trim(),
            startDate: $(``).val().trim(),
            monthsWorked: $(``).val().trim(),
            monthlyRate: $(``).val().trim(),
            totalBilled: $(``).val().trim()
        }

        pushData(emp);

    });

    function pushData(obj) {
        database.ref(`employees`).push(obj);
    }

    function initializeTable () {
        database.ref(`employees`).on(`value`, function (snapshot) {
            let employees = snapshot.val();

            $.each(employees, function () {
                $(`tbody`).append($(`<tr>`).attr(`id`, `key`));
                
            });
        });
    }

    database.ref(`employees`).on(`child_added`, function (childSnapshot) {
        console.log(childSnapshot.val().name);
    });

});