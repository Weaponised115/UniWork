// These Redirect fcucntions are simply a call to open the specified HTML file

function homeRedirect(){
    window.location.href = 'index.html';
}

function contactRedirect() {
    window.location.href = 'contact.html';
}

function portfolioRedirect() {
    window.location.href = 'aboutMe.html';
}

function aboutMeRedirect() {
    window.location.href = 'aboutMe.html';
}

function languagesRedirect() {
    window.location.href = 'languages.html';
}

function hobbiesRedirect() {
    window.location.href = 'hobbies.html';
}

function projectsRedirect() {
    window.location.href = 'projects.html';
}

    
    // TEST: sam@icloud.com

// Creates a function called checkDate that chekcs if the date is valid
function checkDate() {
    // The getElemetnById uses the given ID on the contacts page
    // I named the date input "specified_Date"
    let dateInput = document.getElementById("specified_Date").value;
    
    // Converts the dateInput to a 'Date' object
    let selectedDate = new Date(dateInput);
    
    // Gets the current date
    let currentDate = new Date();

    // If the inputted date is the current date or before the current date, alert with an error
    // Return false
    if (selectedDate <= currentDate) {
        alert('Please select a date that is at least 1 day in the future.');
        return false;
    }
    // Return true
    else{
        return true;
    }
}

// Creates a function that checks that the emails match
function checkEmails() {
    let first_email = document.getElementById("first_email");
    let confirm_email = document.getElementById("confirm_email");
    
    //Error message and check result
    let error =  '';
    let checkTrue = false;

    // If the emails match clear validity message and set the return to true
    if (first_email.value === confirm_email.value) {
        first_email.setCustomValidity('');
        return true;
    } else {
        // If the emails do not match, set the validity message to 'Emails Must Match Buddy!!!" and display it
        // Return false
        error = 'Emails Must Match Buddy!!!';
        first_email.setCustomValidity(error);
        first_email.reportValidity();
        return false;
    }

    // We use a return boolean because in the validateForm section, we will say 'if check email is true...'
}


// Function to Submit
function validateForm(event) {
    // This means the form can not be validateForm YET 
    event.preventDefault();

    // Gets the form
    let form = document.getElementById("enquire-form");

    // If both the form is filled AND the checkEmailss are valid AND the date is valid, then...
    if (form.checkValidity() && checkEmails() && checkDate()) {
        // Gets all values from each input and stores their 'values'
        //We use [0] because there is only one element for name , if we had 2 name sections then we could use [0] or [2]
        let name = document.getElementsByName("name")[0].value;
        let email = document.getElementById("first_email").value;
        let text = document.getElementById("text").value;
        let phoneNumber = document.getElementsByName("phoneNumber")[0].value;
        let specifiedDate = document.getElementById("specified_Date").value;
        
        /* So here, we check to see if the box is true or false(checked or unchecked),
        if it's true, we create a string  "Texts", for example, and assign in to texts variable

        I could also use:

        if (element.checked) {
            texts = "Texts";
            }
            else {
                texts = "";
            }
        
        for each element, but through some research, I saw that ' ? : "" ' can do that for me :) */

        let phoneCalls = document.getElementById("phoneCalls").checked ? "Phone Calls" : "";
        let texts = document.getElementById("texts").checked ? "Texts" : "";
        let emails = document.getElementById("email").checked ? "Emails" : "";

        // Build the summary string, adding all inputted data in to one string
        let summary = "Your Form:\n\n";
        summary += "Name: " + name + "\n";
        summary += "Email: " + email + "\n";
        summary += "Phone Number: " + phoneNumber + "\n";
        summary += "Date Wanted: " + specifiedDate + "\n";
        summary += "Contact Preferences: " + [phoneCalls, texts, emails].filter(Boolean).join(", ") + "\n";
        summary += "Your Message: " + text + "\n";
        summary += "\nTo: 230411191@aston.ac.uk";
        
        // Creates an alert with the summary string inside 
        alert(summary);

        // Submit the form
        form.submit();
    } else {
        // If the form is not valid or the emails do not match, alert the user so
        alert("Please fill out all required fields and ensure that the emails match.");
    }
}

// By Samuel Devinett
