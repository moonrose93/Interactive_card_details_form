 
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


// Function to set outline color
function setOutlineColor(inputElement, color) {
  inputElement.style.outlineColor = color;
}


// Event listener to validate and change outline color
cardInput.addEventListener("input", () => {
  if (!numberRegex.test(cardInput.value)) {
    setOutlineColor(cardInput, "red");   
  } else {
    setOutlineColor(cardInput, ""); // Reset to default or remove outline
  }
});


nameInput.addEventListener("keyup",()=>{
  if(nameInput.value !== ""){
    setOutlineColor(nameInput,"blue");
  }else{
    setOutlineColor(nameInput, "");
  }
})

// Event listener to update card numbers
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
  if(monthInput.value === ""){
    setOutlineColor(monthInput, "red");
    inputBlankMessage.style.display = "block";

  }else{
    setOutlineColor(monthInput, "");
    inputBlankMessage.style.display = "none";
  }

});

yearInput.addEventListener("keyup", () => {
  if(yearInput.value === ""){
    cardExpYearDesktop.innerText = "00";
    cardExpYearMobile.innerText = "00";
  }else{
    cardExpYearDesktop.innerText = yearInput.value;
    cardExpYearMobile.innerText = yearInput.value;
  }

});

const inputBlankMessage2 = document.getElementById("blank2");

yearInput.addEventListener("keyup", ()=>{
  if(yearInput.value === ""){
    setOutlineColor(yearInput, "red");
    inputBlankMessage2.style.display = "block";
  }else{
    setOutlineColor(yearInput, "")
    inputBlankMessage2.style.display = "none";
  }
})

cvcInput.addEventListener("keyup", () => {
  if(cvcInput.value === ""){
    cardCvcDesktop.innerHTML = "000";
    cardCvcMobile.innerHTML = "000";
  }else{
    cardCvcDesktop.innerText = cvcInput.value;
     cardCvcMobile.innerText = cvcInput.value;
  }
});

const inputBlankMessage3 = document.getElementById("blank3");
cvcInput.addEventListener("keyup",()=>{
  if(cvcInput.value === ""){
    setOutlineColor(cvcInput, "red");
    inputBlankMessage3.style.display = "block";
  }else{
    setOutlineColor(cvcInput, "");
    inputBlankMessage3.style.display = "none";
  }
})


    const confirmBtn = document.getElementById("confirm-btn");
    const continueBtn = document.getElementById("continue-btn");
    const popup = document.getElementById("popup");
    const container = document.querySelector(".right");
    
  
        confirmBtn.addEventListener("click", ()=> {
          // Check if all input fields are filled
          const allInputsFilled =
            nameInput.value.trim() !== "" &&
            cardInput.value.trim() !== "" &&
            monthInput.value.trim() !== "" &&
            yearInput.value.trim() !== "" &&
            cvcInput.value.trim() !== "";
      
          if (allInputsFilled) {
            // Display the popup and hide the container's right side
            popup.style.display = "block";
            container.style.display = "none";
          }
        });
      
        continueBtn.addEventListener("click", () => {
          // Hide the popup and show the container's right side
          popup.style.display = "none";
          
        });
      
      