console.log("hi from contact script")


function validateForm(e) {
    e.preventDefault();

    const span = document.getElementById('error-msg');
    span.textContent = '';
    let errorMessage = '';

    const mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


    const fname = document.forms["myForm"]["fname"].value;
    const lname = document.forms["myForm"]["lname"].value;
    const fhone = document.forms["myForm"]["fhone"].value;
    const mail = document.forms["myForm"]["mail"].value;
    const subject = document.forms["myForm"]["subject"].value;

    if (fname === '') {
        errorMessage = 'first name is required';
        span.textContent = errorMessage;
        return;
    }
    if (lname === '') {
        errorMessage = 'last name is required';
        span.textContent = errorMessage;
        return;
    }
    if (fhone === '') {
        errorMessage = 'phone number is required';
        span.textContent = errorMessage;
        return;
    }
    if (!fhone.toString().match(phonePattern)) {
        errorMessage = 'please enter valid phone number';
        span.textContent = errorMessage;
        return;
    }
    if (!mail.length) {
        errorMessage = 'mail address is required';
        span.textContent = errorMessage;
        return;
    }
    if (!mail.toString().match(mailPattern)) {
        errorMessage = 'please enter valid mail address example@domain.somthing';
        span.textContent = errorMessage;
        return;
    }
}

