/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

let motionButton = document.getElementById("motion-button");

const reduceMotion = () => {
  document.body.classList.toggle("reduce-motion");
  if(document.body.classList.contains("reduce-motion"))
    motionButton.textContent = "Reduce Motion: ON";
  else
    motionButton.textContent = "Reduce Motion: OFF"

}

motionButton.addEventListener("click", reduceMotion);

/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const submitButton = document.getElementById("rsvp-button");
const fName = document.getElementById("fname");
const locationInput = document.getElementById("location");
const confirmation = document.getElementById("confirmation");
let participantsDiv = document.querySelector(".rsvp-participants");
let count =3;
const addParticipant = (person) => {
  
    // Step 2: Write your code to manipulate the DOM here
  const message = "🎮 " + person.name + " from " + person.location  + " has Joined." 
  confirmation.textContent = message;
  let oldCount = document.getElementById("rsvp-count");
  oldCount.remove();
  count = count + 1;
  let counter = document.createElement("p");
  counter.id = "rsvp-count";
  counter.textContent = "⭐ " + count + " people have joined this server!";
  participantsDiv.appendChild(counter);
  
}

// Step 3: Add a click event listener to the submit RSVP button here
//submitButton.addEventListener("click", addParticipant);

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  
  let person = {
    name: rsvpInputs[0].value,
    location: rsvpInputs[1].value,
    username: rsvpInputs[2].value,
    email: rsvpInputs[3].value

  };
  // TODO: Loop through all inputs
  for(let i = 0; i < rsvpInputs.length; i++){
    if(rsvpInputs[i].value.length < 2 ){
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    }else{
      rsvpInputs[i].classList.remove("error");
    }
  }
  // TODO: Inside loop, validate the value of each input
  let emailInput = document.getElementById("email");
  if(!(emailInput.value.includes("@"))){
    containsErrors = true;
    emailInput.classList.add("error");
  } else{
    emailInput.classList.remove("error");
  }
  // TODO: If no errors, call addParticipant() and clear fields
  if(containsErrors === false){
    addParticipant(person);
    toggleModal(person);
    for(let i = 0; i < rsvpInputs.length; i++){
      rsvpInputs[i].value = "";
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
submitButton.addEventListener("click", validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Scroll Animations ***
  
  Purpose:
  - Use this starter code to add scroll animations to your website.

  When To Modify:
  - [ ] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll(".revealable");

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            current.classList.add("active");
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            current.classList.remove("active");
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener("scroll", reveal);

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/
let modal = document.getElementById("success-modal");
const toggleModal = (person) => {
    
    let modalContent = document.getElementById("modal-text");
    
    modal.style.display = "flex";
    
    modalContent.textContent = "Thank's for joining " + person.name + "! Get ready to mine, build, and create unforgettable memories with the community. See you in the game!"

    let intervalId = setInterval(animateImage, 700);

    setTimeout(() => {
      modal.style.display = "none";
      clearInterval(intervalId);
    }, 5000);
    
    
}

// TODO: animation variables and animateImage() function
let rotateFactor = 10;
let modalImage = document.getElementById("modalImg");
let animateImage = () => {
  rotateFactor = rotateFactor === 10 ? -10 : 10;
   if(document.body.classList.contains("reduce-motion")){
    modalImage.style.transform = "none";
   }else{
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
   }
}

let modalButton = document.getElementById("modalButton");
let closeModal = () => {
  modal.style.display = 'none';
}
modalButton.addEventListener("click", closeModal);

