const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbar.classList.replace('bg-transparent', 'nav-color');
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace('nav-color', 'bg-transparent');
  }
});

// cororousel

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  perMove: 1,
  rewind: true,
  breakpoints: {
    640: {
      perPage: 2,
      gap: ".7rem",
      height: "12rem",
    },
    480: {
      perPage: 1,
      gap: ".7rem",
      height: "12rem",
    },
  },
})

splide.mount()
// function send mail
function sendEmail() {
  const emailInput = document.getElementById('emailInput');
  const messageInput = document.getElementById('messageInput');

  Email.send({
    Host: "smtp.gmail.com",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: 'receiver@email_address.com',
    From: emailInput,
    Subject: "Website Travel Pangandaran",
    Body: messageInput,
  })
    .then((msg) => {
      alert(msg)
    })
}