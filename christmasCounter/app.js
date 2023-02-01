// ***** 로직생각해보기 *****
// 남은 날짜 생각하기
// 1번. new date() 이용해서 날짜 가져오기
// 2번. 남은 날짜 계산 오늘이 x일 경우,
// 1/1~ 12/24까지 357일,
// 하루는 h,m,s으로 표현할거기 때문에 356을 기준으로 두기
// 1월이다 -> (356-a)+x
// 2월 -> 356-(a+c) +x
// 3월 -> 356- (a+c+a)+x
// 4월 -> 356- (a+c+a+b) +x
// 5월 -> 356- (a+c+a+b+a)+x
// 1월 31일 a
// 2월 28일 c
// 3월 31일 a
// 4월 30일 b
// 5월 31일 a
// 6월 30일 b
// 7월 31일 a
// 8월 31일 a
// 9월 30일  b
// 10월 31일 a
// 11월30일  b
// 12월 24일 d-day
// 12월 25일 -> 31-x +356

// ***** 변수선언 *****
const dayEl = document.getElementById("day");
const thirtyOne = 31;
const thirty = 30;
const twentyEight = 28;
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondsEl = document.getElementById("seconds");
const month = new Date().getMonth();
const day = new Date().getDate();
// ***** 남은 데이 구하기 *****
function showLeftDay() {
  switch (month) {
    case 1:
      dayEl.textContent = 356 - thirtyOne + day;
      break;
    case 2:
      dayEl.textContent = 356 - (thirtyOne + twentyEight) + day;
      break;
    case 3:
      dayEl.textContent = 356 - (thirtyOne * 2 + twentyEight) + day;
      break;
    case 4:
      dayEl.textContent = 356 - (thirtyOne * 2 + twentyEight + thirty) + day;
      break;
    case 5:
      dayEl.textContent = 356 - (thirtyOne * 3 + twentyEight + thirty) + day;
      break;
    case 6:
      dayEl.textContent =
        356 - (thirtyOne * 3 + twentyEight + thirty * 2) + day;
      break;
    case 7:
      dayEl.textContent =
        356 - (thirtyOne * 4 + twentyEight + thirty * 2) + day;
      break;
    case 8:
      dayEl.textContent =
        356 - (thirtyOne * 5 + twentyEight + thirty * 2) + day;
      break;
    case 9:
      dayEl.textContent =
        356 - (thirtyOne * 5 + twentyEight + thirty * 3) + day;
      break;
    case 10:
      dayEl.textContent =
        356 - (thirtyOne * 6 + twentyEight + thirty * 3) + day;
      break;
    case 11:
      dayEl.textContent =
        356 - (thirtyOne * 6 + twentyEight + thirty * 4) + day;
      break;
    case 12:
      day < 25
        ? (dayEl.textContent =
            356 - (thirtyOne * 6 + twentyEight + thirty * 4) - day)
        : (dayEl.textContent = 31 - day + 358);
      break;
  }
}
showLeftDay();

// ***** 남은 시각 구하기 *****
function showLeftTime() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  hourEl.textContent = 24 - hour - 1;
  minuteEl.textContent = ((60 - minute) % 60) - 1;
  secondsEl.textContent = (60 - seconds) % 60;
}
setInterval(showLeftTime, 1000);
