const cont1 = document.querySelector(".container");
const cont2 = document.querySelector(".wrapper-2");
const button1 =document.getElementById("button1");
const button2 =document.getElementById("button2");
const goback1 =document.querySelector(".goback"); 
const inputname = document.getElementById("name");
const inputemail = document.getElementById("email");
const inputphone = document.getElementById("phone");
const iconsonpicture = document.querySelector(".one"); 
const planItem = document.querySelectorAll(".plan-item");

button1.addEventListener("click", (e) =>{
    e.preventDefault();
    if(inputname.value === "" || inputemail.value === "" || inputphone.value === ""){
        alert("Please fill in all fields");
    } else {
        cont1.style.display = "none";
        cont2.style.display = "flex";
        iconsonpicture.style.backgroundColor = "aliceblue";
        inputname.value = "";
        inputemail.value = "";  
        inputphone.value = "";
    }
})
goback1.addEventListener("click", (e) =>{
    e.preventDefault();
    cont1.style.display = "flex";
    cont2.style.display = "none";
    iconsonpicture.style.backgroundColor = "transparent";
})
planItem.forEach((item) =>{
    item.addEventListener("click", () => {
        planItem.forEach((el) =>{
            el.style.backgroundColor = "";
        } );
        item.style.backgroundColor = "red";
    });
})
