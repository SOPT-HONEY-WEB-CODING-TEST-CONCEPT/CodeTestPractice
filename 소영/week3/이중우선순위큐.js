function solution(operations) {
  var answer = [];
  //빈 큐 생성
  var queue = [];

  //최솟값과 최댓값 삭제해주는 함수 만듦
  popMin = () => {
    //큐가 비어있으면 삭제 연산 무시하도록
    if (queue.length === 0) return null;
    //최솟값과 최솟값의 index 구함
    const minIndex = queue.indexOf(Math.min(...queue));
    const minNum = queue[minIndex];
    //splice 이용해서 큐에서 최솟값 삭제
    queue.splice(minIndex, 1);
    //최솟값을 리턴(문자를 숫자로 바꿔줌)
    return Number(minNum);
  };

  popMax = () => {
    //최솟값 삭제와 같은 로직
    if (queue.length === 0) return null;
    const maxIndex = queue.indexOf(Math.max(...queue));
    const maxNum = queue[maxIndex];
    queue.splice(maxIndex, 1);
    return Number(maxNum);
  };

  // operations을 순회하면서 명령어 I로 시작하면 숫자부분만 뽑아서 큐에 넣어줌
  // I로 시작하지 않을 경우(D로 시작) -가 있으면 최솟값 삭제 함수를 호출, 없으면 최댓값 삭제 함수 호출
  operations.map((item) =>
    item[0] === 'I' ? queue.push(parseInt(item.slice(2))) : item[2] === '-' ? popMin() : popMax()
  );

  //연산 처리 후 큐 비어있으면 answer에 [0,0] 넣어줌
  //비어있지 않다면 answer에 최댓값과 최솟값을 순서대로 push해줌
  if (queue.length === 0) {
    answer = [0, 0];
  } else {
    answer.push(popMax());
    answer.push(popMin());
  }
  return answer;
}
