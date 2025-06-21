const cont1 = document.querySelector(".container");
const cont2 = document.querySelector(".wrapper-2");
const cont3 = document.querySelector(".container-3");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const goback1 = document.querySelector(".goback");

const inputname = document.getElementById("name");
const inputemail = document.getElementById("email");
const inputphone = document.getElementById("phone");

const iconsonpicture = document.querySelector(".one");
const planItem = document.querySelectorAll(".plan-item");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;

let selectedPlan = null; // ✅ Track selected plan

// Handle Step 1: Validation and move to Step 2
button1.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputname.value === "" || inputemail.value === "" || inputphone.value === "") {
        alert("Please fill in all fields");
    } else if (!emailRegex.test(inputemail.value)) {
        alert("Please enter a valid email address");
    } else if (!phoneRegex.test(inputphone.value)) {
        alert("Please enter a valid phone number");
    } else {
        cont1.style.display = "none";
        cont2.style.display = "flex";
        iconsonpicture.style.backgroundColor = "aliceblue";

        // (optional) Keep user inputs if needed
        // inputname.value = "";
        // inputemail.value = "";
        // inputphone.value = "";
    }
});

// Go back to Step 1
goback1.addEventListener("click", (e) => {
    e.preventDefault();
    cont1.style.display = "flex";
    cont2.style.display = "none";
    cont3.style.display = "none";
    iconsonpicture.style.backgroundColor = "transparent";
});

// Plan item selection
planItem.forEach((item) => {
    let selectedPlan = null; // ✅ Initialize selected plan
    item.addEventListener("click", () => {
        planItem.forEach((el) => {
            el.style.backgroundColor = "";
        });
        item.style.backgroundColor = "red";
        selectedPlan = item; // ✅ Store the selected plan
    });
});

// Step 3 - Only proceed if a plan was selected
button3.addEventListener("click", (e) => {
  e.preventDefault();
  if (selectedPlan === null) {
    alert("Please select a plan");
  } else {
    cont3.style.display = "flex";
    cont1.style.display = "none";
    cont2.style.display = "none";
    iconsonpicture.style.backgroundColor = "transparent";
  }
});
