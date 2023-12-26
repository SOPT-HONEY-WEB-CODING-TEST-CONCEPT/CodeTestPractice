// 문제 설명
// 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

// 예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

// 문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

// 제한 조건
// number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
// k는 1 이상 number의 자릿수 미만인 자연수입니다.
// 입출력 예
// number	    k	return
// "1924"	    2	"94"
// "1231234"	3	"3234"
// "4177252841"	4	"775841"

const number = ["1924", "1231234", "4177252841"];

const k = [2, 3, 4];

function solution(number, k) {
  const arr = [];

  for (let i = 0; i < number.length; i++) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      //현재 숫자보다 큰 수가 나올때까지 최대 k번을 반복합니다
      k--;
      //배열 마지막 숫자와 현재 숫자를 비교한 후 현재 숫자가 더 크면 해당 숫자를 pop함
      arr.pop();
    }
    //arr에 현재 숫자를 push 해줍니다
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k);
  //splice를 활용해 남은 k만큼 arr의 뒤에서 제거해줍니다
  return arr.join("");
  //arr의 숫자를 join("")을 이용해 string 값으로 변환해줍니다
}
