//Sign up Form

let email = document.querySelector('.formInput');

document.querySelector('form').addEventListener('submit', (e) => {

  e.preventDefault();

  document.querySelector('.signupHeader').textContent = 'Thank you for subscribing!';

  email.value = '';
});





// Nav Menu Expand

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}