const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const contactFormEmail = document.querySelector('.contact-form-email');


navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
});


contactFormEmail.addEventListener('click', sendEmail)

function sendEmail() {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "ricardonovais1@gmail.com",
    Password : "password",
    To : 'amigoviolaooficial@gmail.com',
    From : document.getElementById('email').value,
    Subject : "Nova mensagem",
    Body : `Nome: ${document.getElementById('message').value}<br />
            Email: ${document.getElementById('email').value}<br />
            Mensagem: ${document.getElementById('message').value}<br />`
}).then(
  message => alert(message)
);
}

