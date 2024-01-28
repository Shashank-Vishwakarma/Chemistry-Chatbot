const inputBox = document.querySelector(".search input");
const sendButton = document.querySelector(".search button");
const answerBox = document.querySelector(".chat-box");

sendButton.addEventListener("click", ()=>{
    const question = inputBox.value;
    answerBox.innerHTML = question;
    inputBox.value = "";
})