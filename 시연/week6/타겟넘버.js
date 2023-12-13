// 문제 설명
// n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3
// 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
// 각 숫자는 1 이상 50 이하인 자연수입니다.
// 타겟 넘버는 1 이상 1000 이하인 자연수입니다.
// 입출력 예
// numbers	      target	return
// [1, 1, 1, 1, 1]	3	       5
// [4, 1, 2, 1]	    4	       2

const numbers = [
  [1, 1, 1, 1, 1],
  [4, 1, 2, 1],
];
const target = [3, 2];

function solution(numbers, target) {
  let answer = 0;

  //인덱스와 합을 받은 dfs라는 함수를 만들어 줍니다
  const dfs = (idx, sum) => {
    //idx === numbers.length를 통해 배열의 마지막 요소까지 모두 순회하도록 해준 뒤
    if (idx === numbers.length) {
      //합이 target의 값과 같다면 answer를 1증가시킵니다
      if (sum === target) answer++;
      return;
    }

    //위의 경우에 해당되지 않는다면 idx의 값을 1 증가시키고 '더하기' 연산을 할 수 있도록 numbers의 값 하나와 sum을 더한 값을 인수를 넘겨줍니다
    //'더하기'연산이 끝난 후 '빼기'연산도 가능하도록 똑같이 numbers의 값 하나와 sum을 뺀 값을 인수로 넘겨줍니다
    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };

  //dfs함수에 초기값으로 0과 0을 인수로 넘겨줘 함수를 실행시킵니다
  dfs(0, 0);

  return answer;
}
