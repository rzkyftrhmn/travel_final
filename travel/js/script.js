AOS.init()

const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
  if (window.scrollY > 1) {
    navbar.classList.replace('bg-transparent', 'nav-color');
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace('nav-color', 'bg-transparent');
  }
});

// cororousel

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 2,
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
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission
  (() => {
    emailjs.init("WwuTIb4eI6Pzw0xa8")
  })()
  // Form validation
  const emailInput = document.getElementById('emailInput').value;
  const messageInput = document.getElementById('messageInput').value;
  const emailPerusahaan = "bintangjaya8382@gmail.com"
  const subjek = "Subject"
  const replyTo = "noreply@gmail.com"

  if (emailInput === '' || messageInput === '') {
    alert('Please fill in both email and message fields.');
    return; // Exit the function if form is empty
  }

  console.log(emailInput, messageInput);

  let data = {
    emailName: emailInput,
    to: emailPerusahaan,
    subject: subjek,
    reply_to: replyTo,
    message: messageInput,
  }

  let serviceID = "service_s31wfje"
  let template = "template_s6ki64q"

  emailjs.send(serviceID, template, data)
    .then((msg) => {
      swal({
        title: "Email berhasil Terkirim",
        icon: "success",
        button: "Oke",
      });
    }).catch((error) => {
      swal({
        title: "Email gagal Terkirim",
        icon: "error",
        button: "Oke",
      });
      console.log(error);
    }
    )

});
