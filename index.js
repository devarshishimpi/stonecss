// ripple effect on get early access button

function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
}
  
const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
    button.addEventListener("click", createRipple);
}

// displaying the recaptcha when the user clicks on the input field

const emailInput = document.getElementById('emailInput');
const recaptcha =   document.getElementById('recaptcha');
emailInput.addEventListener('click' , ()=>{
  recaptcha.classList.toggle('show');
})

// mobile hamburger opening closing

const hamburger = document.querySelector('.hamburger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const mobilenav = document.querySelector('#mobilenav');
const body = document.body;
body.addEventListener('click', (e) => {
  if (e.target === hamburger || e.target === line1 || e.target === line2 || e.target === line3) {
    if (hamburger.classList.contains('hamactive')) {
      hamburger.classList.remove('hamactive')
      mobilenav.style.left = '-100%'
      body.style.overflowY = 'auto';
    } else {
      hamburger.classList.add('hamactive')
      body.style.overflowY = 'hidden';
      mobilenav.style.left = '0'
    }
  } else {
    hamburger.classList.remove('hamactive')
    body.style.overflowY = 'auto';
    mobilenav.style.left = '-100%'
  }
})
