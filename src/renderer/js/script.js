const inputBox = document.querySelector(".search input");
const sendButton = document.querySelector(".search button");
const answerBox = document.querySelector(".chat-box");

async function getResponse() {
    const response = await fetch('http://localhost:5000/api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.text();
    return data;
}

sendButton.addEventListener("click", ()=>{
    const question = inputBox.value;
    // get the response
    const answer = getResponse();

    answerBox.innerHTML = "Please wait a few seconds for the answer...";
    answer.then((data)=>{
        answerBox.innerHTML = data;
        inputBox.value = "";
    }).catch((error)=>{
        answerBox.innerHTML = error;
        inputBox.value = "";
    })
})