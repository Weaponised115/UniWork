function homeRedirect(){
    window.location.href = 'index.html';
}

function contactRedirect() {
    window.location.href = 'contact.html';
}

function portfolioRedirect() {
    window.location.href = 'aboutme.html';
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


    function checkDate(){

        let dateInput = document.getElementById("specified_Date").value;
        
        let selectedDate = new Date(dateInput);
        let currentDate = new Date();

        if (selectedDate <= currentDate) {
            alert('Please select a date that is at least 1 day in the future.');
        }
    }
    
    // TEST: sam@icloud.com

     function checkEmail(){
        let first_email = document.getElementById("first_email");
        let confirm_email = document.getElementById("confirm_email");
        let error =  '';

        if (first_email.value === confirm_email.value){
            first_email.setCustomValidity('');
        }
        else{
            error = 'Emails Must Match Buddy!!!';
        }
        first_email.setCustomValidity(error);
        first_email.reportValidity();
    }

    function submitted() {
        let name = document.getElementsByName("name")[0].value;
        let email = document.getElementById("first_email").value;
        let phoneNumber = document.getElementsByName("phoneNumber")[0].value;
        let specifiedDate = document.getElementById("specified_Date").value;
        
    


        let phoneCalls = document.getElementById("phoneCalls").checked ? "Phone Calls" : "";
        let texts = document.getElementById("texts").checked ? "Texts" : "";
        let emails = document.getElementById("email").checked ? "Emails" : "";

           /*So here, we check to see if the box is true or false(checked or unchecked),
          if it's true, we create a string  "Texts", for example, and assign in to texts variable

        I could also use:
        if (element.checked) {
            texts = "Texts";
            }
            else {
                texts = "";
            }
        but through some research, I saw that ' ? : "" ' can do that for me :)
         */

        let summary = "Your Form:\n\n";
        summary += "Name: " + name + "\n";
        summary += "Email: " + email + "\n";
        summary += "Phone Number: " + phoneNumber + "\n";
        summary += "Date Wanted: " + specifiedDate + "\n";
        summary += "Contact Preferences: " + [phoneCalls, texts, emails].filter(Boolean).join(", ") + "\n";
        summary += "\nTo: 230411191@aston.ac.uk";
    
        alert(summary);
    }