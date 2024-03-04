window.addEventListener('scroll', function() {
  const nav = document.querySelector('.nav');

  if (window.scrollY > 0) {
    nav.classList.add('sticky-nav');
  } else {
    nav.classList.remove('sticky-nav');
  }
});

function sendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "mitchcallahan83@gmail.com",
      Password : "7F8D432537DD7B7720C2AB96BD96676E519E",
      To : 'mitchcallahan83@gmail.com',
      From : "mitchcallahan83@gmail.com",
      Subject : "New Gum Removal Request",
      Body : "Name: " + document.getElementById("name").value + "<br>Phone: " + 
            document.getElementById("phone").value + "<br>Email: " + document.getElementById("email").value + 
            "<br>Suburb: " + document.getElementById("suburb").value + "<br>Message: " 
            + document.getElementById("message").value
  }).then(
    function (message) {
      console.log(message);
      alert("Your Message was Successfully Sent");
      document.getElementById("contact").classList.add('hidden');
      document.getElementById("thanks").classList.remove('hidden');
    }
  );
}

function phoneDropdown() {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("responsive");
}