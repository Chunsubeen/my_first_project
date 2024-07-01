let computerNum = 0;
let playButton = document.getElementById("play_button");
let userInput = document.getElementById("user_input");
let resultArea = document.getElementById("resultArea");
let resetButton =document.getElementById("reset_button");
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chance_area");
let history=[];
let answerNumber = document.getElementById("answer");
let numberHistory = document.getElementById("number_history");

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput,addEventListener("focus",function(){
    userInput.value="";
});

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNum);
    answerNumber.textContent = `정답 : ${computerNum}`;
}

function play() {
    let userValue = userInput.value;

    if(userValue <1 || userValue>100) {
        resultArea.textContent="1과 100사이 숫자를 입력해 주세요";
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요";
        return;
    }
    chances--;
    chanceArea.textContent = `남은기회:${chances}번`;

    if(userValue < computerNum) {
        resultArea.textContent = "UP";
    }else if(userValue > computerNum) {
        resultArea.textContent = "DOWN";
    } else{
        resultArea.textContent = "정답";
        gameOver=true;
    }

    history.push(userValue)
    numberHistory.textContent = `기록:${history}`;
        
    if(chances <1) {
        gameOver =true;
    }
    if (gameOver === true) {
        playButton.disabled = true;
    }

    
}

function reset() {
    //user input창이 깨끗하게 정리됨
    userInput.value = "";
    //새로운 번호가 생성
    pickRandomNum()
    resultArea.textContent = "리셋완료";
}
pickRandomNum();