function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "youremail@gmail.com",
    Password : "yourpassword",
    To : 'gielpalnyeliep@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry ",
    Body : "Name:" + document.getElementById("name").value
          + "<br> Email:" + document.getElementById("email").value
          + "<br> Message:" + document.getElementById("message").value
}).then(
  message => alert("Message Sent Successfully")
);
}