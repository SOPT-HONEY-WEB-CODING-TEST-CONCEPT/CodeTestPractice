function solution(numbers, target) {
  //방법의 수
  let answer = 0;

  const dfs = (index, sum) => {
    //배열의 맨 마지막 요소까지 모두 순회했다면
    if (index === numbers.length) {
      //sum===target이면 방법의 수를 올려주고, 그렇지 않으면 그냥 함수를 빠져나옴
      if (sum === target) answer++;
      return;
    }

    // 인덱스가 배열을 모두 순회하기 전까지는 해당 숫자를 더하는 연산과 빼는 연산을 수행
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  };

  //함수 호출 (0번째 숫자, 현재까지 합계 0)
  dfs(0, 0);
  return answer;
}
