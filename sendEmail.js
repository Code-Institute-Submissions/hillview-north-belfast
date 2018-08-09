// code from email.js for sending email from site


function sendMail(contactForm) {
    emailjs.send("gmail", "equality_cant_wait", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_phone":contactForm.phone.value,
        "info_detail": contactForm.comment.value
    })
    .then (
        /*
        custom alert methods called to indicate success/failure to send email
        page reload following successful email (and click 'ok' on alert to wipe 
        details from email form
        */
        function(response) {
            alert("Thank you for contacting the campaign.", response);
            window.location.reload();
            
        },
        function(error) {
            alert("Your email failed to send. Please try again. If the problem persists, contact info@pprproject.org.", error);
      }
    );
    return false; /*prevent new page loading*/
}