const confirmBtn = document.querySelector(".baseballNumberConfirmBtn");
const baseballNumber = document.getElementById("baseballNumber");

let baseballNumberValue;
let randomNumber;
// 어떻게 하면 빠르고 정확하게 코딩할 수 있을까

/* 
컴퓨터 수 먼저 
    1. random 수 생성
    2. 중복 여부 확인
    3. 중복시 난수 재생성
*/
/* 
입력 받은 수 
    - alert
        1. 길이가 3인 숫자 형태인지 (html 뿐만 아니라 js로도 체크)
        2. 모든 수가 숫자인지 => 숫자가 아닌지 체크 (특수문자, 공백 체크)
        3. 길이가 3인지 (비거나 덜 입력한 경우)  
*/

/**
 * baseball value & randomNumber 정합성
 *  1. value 값은 반복해서 받아야한다
 *  2. random 값은 고정이다.
 *  3. 볼과 스트라이크가 있는 경우 볼을 앞에 작성한다.
 *  4. 체크해야 할 사항은 스트라이크, 볼, 낫싱
 *  5. 확인 버튼 누르면 -> 정합성 체크 + 결과 표시
 */

const changeSet = (value) => {
  return [...new Set([...value])];
};

const validateOverlap = (value) => {
  if (value.length < 3) {
    createRandomNumber();
  }
  console.log(randomNumber);
};

const createRandomNumber = () => {
  randomNumber = String(Math.floor(Math.random() * 999 + 1));
  validateOverlap(changeSet(randomNumber));
};

createRandomNumber();

const handleValue = () => {
  baseballNumberValue = baseballNumber.value;
  // validation
  baseballNumber.value = "";
};

confirmBtn.addEventListener("click", handleValue);
