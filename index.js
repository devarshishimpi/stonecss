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