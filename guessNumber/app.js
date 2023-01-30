// 변수 설정
const btn = document.querySelector("button");
const numberRangeInput = document.getElementById("number-range");
const resultMessage = document.getElementById("result-message");
const h4 = document.querySelector("h4");
const reload = document.getElementById("reload");
// 1번. 0 이상 임의의 정수를 사용자로부터 제공받음 .
// 2번. 사용자가 0부터 임의의 정수 사이의 숫자 중 하나만 입력하도록 함 .
// 3번. 컴퓨터가 0~임의의 정수 중 하나의 랜덤한 숫자를 고름
// 4번. 버튼 눌렀을 때 사용자가 고른 숫자와 컴퓨터가 고른 숫자가 일치하는지 확인
// 5-1번. 일치할 경우 이겼어요! 화면에 나타남
// 5-2번.일치하지 않을 경우 졌어요! 화면에 나타남

// 1번. ***** 0 이상 정수만 입력하도록 함 *****
numberRangeInput.addEventListener("input", () => {
  restrictNegativeNumber();
});
function restrictNegativeNumber() {
  const numberRange = numberRangeInput.value;
  if (numberRange < 0) {
    alert("0이상 정수만 입력해주세요");
    return (numberRangeInput.value = "");
  }
}

// 2번. ***** guess Number*****

// 3번. 컴퓨터가 0~임의의 정수 중 하나의 랜덤한 숫자를 고름

btn.addEventListener("click", getRandomNumber);

function getRandomNumber(e) {
  e.preventDefault();
  const randomNumberByUser = document.getElementById("random-number").value;
  if (randomNumberByUser > numberRangeInput.value) {
    alert(`입력하신 숫자 ${numberRangeInput.value}안에서 숫자를 고르세요`);
  } else {
    const randomNumberByComputer = Math.floor(
      Math.random() * randomNumberByUser
    );
    resultMessage.innerHTML = `You chose: ${randomNumberByUser}, the machine chose:${randomNumberByComputer}`;
    if (parseInt(randomNumberByUser) === randomNumberByComputer) {
      h4.innerHTML = "You win!";
    } else {
      h4.innerHTML = "You lost..";
    }
  }
}

// ***** 새로 고침 *****
reload.addEventListener("click", () => {
  window.location.reload();
});
