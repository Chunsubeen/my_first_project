let computerNum = 0;
let playButton = document.getElementById("play_button");
let userInput = document.getElementById("user_input");
let resultArea = document.getElementById("resultArea");

playButton.addEventListener("click",play);
function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value;
    if(userValue<computerNum) {
        resultArea.textContent = "UP"
    }else if(userValue > computerNum) {
        resultArea.textContent = "DOWN"
    } else{
        resultArea.textContent = "정답"
    }
}
pickRandomNum();