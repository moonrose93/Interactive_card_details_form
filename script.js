 
 //Card elements
 //For desktop
 const cardNumDesktop = document.getElementById("card-num");
 const cardNameDesktop = document.getElementById("card-name");
 const cardExpMonthDesktop = document.getElementById("exp-month");
 const cardExpYearDesktop = document.getElementById("exp-year");
 const cardCvcDesktop = document.getElementById("cvc-card-desktop");
//For mobile

const cardNumMobile = document.getElementById("card-number-mobile");
const cardNameMobile = document.getElementById("card-name-mobile");
const cardExpMonthMobile = document.getElementById("exp-month-mobile");
const cardExpYearMobile = document.getElementById("exp-year-mobile");
const cardCvcMobile = document.getElementById("cvc-card-mobile");



//Input Elements

const nameInput = document.getElementById("name-input");
const cardInput = document.getElementById("card-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcInput = document.getElementById("cvc-input");



const cardNumberErrorMessage = document.getElementById("card-number-error");

cardInput.addEventListener("keyup", () => {
  if (!/^\d*$/.test(cardInput.value)) {
    cardNumberErrorMessage.style.display = "block";
  } else {
    cardNumberErrorMessage.style.display = "none"
  }
});

const numberRegex = /^\d*$/;/*In this code, I've attached an input event listener to the cardInput element. Whenever the user inputs something, the event listener checks if the input matches the defined numberRegex regular expression. If it doesn't match (i.e., it contains non-numeric characters),
                            the outline color of the input field is set to red. If the input matches the regex (i.e., it only contains numbers), the outline color is reset to its default or removed.*/

/*Explanation of the regex pattern:

^: Start of the string
\d+: Match one or more digits (0-9)
$: End of the string*/

// Card number should be 16 digits
const cardNumberRegex = /^\d{16}$/;
// Month should be 2 digits
const monthRegex = /^\d{2}$/;
// Year should be 2 digits
const yearRegex = /^\d{2}$/;
// CVC should be 3 digits
const cvcRegex = /^\d{3}$/;
// Name should contain only letters
const nameRegex = /^[A-Za-z\s]+$/;


// Function to set outline color-we use it for every input = by calling this function inside the eventlistener and the input.
function setOutlineColor(inputElement, color) {
  inputElement.style.outlineColor = color;
}


// Event listener to validate and change outline color-if card input vale is not equal to the regex patter then set outline color to the cardinput red elese set it blue
cardInput.addEventListener("input", () => {
  if (!cardNumberRegex.test(cardInput.value)) {
    setOutlineColor(cardInput, "red");   
  } else {
    setOutlineColor(cardInput, "blue"); // Reset to default or remove outline
  }
});

//if name input value is not empty then the name input to turn blue else to be normal
nameInput.addEventListener("keyup",()=>{
  if(!nameRegex.test(nameInput.value)){
    setOutlineColor(nameInput,"red");
  }else{
    setOutlineColor(nameInput, "blue");
  }
})


//if nameinput value i quual to an empty string then we set the defualt text for the card else we set the the name input value
nameInput.addEventListener("keyup",()=>{
  if(nameInput.value ===""){
    cardNameDesktop.innerText = "Jane Appleseed";
    cardNameMobile.innerText = "Jane Appleseed";
  }else{
    cardNameDesktop.innerText = nameInput.value;
    cardNameMobile.innerText = nameInput.value;
  }
})

// Event listener to update card numbers - if card input is empty then cardnum to be set as its set  else the cardnum to be equal to the input value.
cardInput.addEventListener("keyup", () => {
  if (cardInput.value === "") {
    cardNumDesktop.innerText = "0000 0000 0000 0000";
    cardNumMobile.innerText = "0000 0000 0000 0000";
  } else {

    cardNumDesktop.innerText = cardInput.value;
    cardNumMobile.innerText = cardInput.value;
  }
});

// Event listeners to update other card details
monthInput.addEventListener("keyup", () => {
  if (monthInput.value === "") {
    cardExpMonthDesktop.innerText = "00";
    carExpMonthMobile.innerText = "00";
  } else {
    cardExpMonthDesktop.innerText = monthInput.value;
    cardExpMonthMobile.innerText = monthInput.value;
  }

});

const inputBlankMessage1 = document.getElementById("blank1");

monthInput.addEventListener("keyup",()=>{
  if(!monthRegex.test(monthInput.value)){
    setOutlineColor(monthInput, "red");
    inputBlankMessage.style.display = "block";

  }else{
    setOutlineColor(monthInput, "blue");
    inputBlankMessage.style.display = "none";
  }

});


const inputBlankMessage2 = document.getElementById("blank2");

yearInput.addEventListener("keyup", ()=>{
  if(!yearRegex.test(yearInput.value)){
    setOutlineColor(yearInput, "red");
    inputBlankMessage2.style.display = "block";
  }else{
    setOutlineColor(yearInput, "blue")
    inputBlankMessage2.style.display = "none";
  }
})

const inputBlankMessage3 = document.getElementById("blank3");

cvcInput.addEventListener("keyup", () => {
  if(cvcInput.value === ""){
    setOutlineColor(cvcInput, "red");
    cardCvcDesktop.innerHTML = "000";
    cardCvcMobile.innerHTML = "000";
    inputBlankMessage3.style.display = "block";
  }else{
    setOutlineColor(cvcInput, "blue");
     cardCvcDesktop.innerText = cvcInput.value;
     cardCvcMobile.innerText = cvcInput.value;
     inputBlankMessage3.style.display = "none";
  }
});



    const confirmBtn = document.getElementById("confirm-btn");
    const continueBtn = document.getElementById("continue-btn");
    const popup = document.getElementById("popup");
    const container = document.querySelector(".right");
    
  
    confirmBtn.addEventListener("click", () => {
      // Check if all input fields are filled and meet the regex requirements
      const allInputsFilledAndValid =
        nameRegex.test(nameInput.value) &&
        cardNumberRegex.test(cardInput.value) &&
        monthRegex.test(monthInput.value) &&
        yearRegex.test(yearInput.value) &&
        cvcRegex.test(cvcInput.value);
    
      if (allInputsFilledAndValid) {
        // Display the popup and hide the container's right side
        popup.style.display = "block";
        container.style.display = "none";
      }
    });
    
      
        continueBtn.addEventListener("click", () => {
          // Hide the popup and show the container's right side
          popup.style.display = "none";
          
        });
      
      
