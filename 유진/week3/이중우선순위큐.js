function solution(operations) {
  let pq = [];
  for (let i = 0; i < operations.length; i += 1) {
    if (operations[i][0] == "I") {
      // 큐에 숫자 삽입
      let data = operations[i].split(" ");
      pq.push(Number(data[1]));
      pq.sort((a, b) => a - b);
    } else {
      // 큐에서 값 삭제
      if (operations[i][2] == "-") {
        // 최솟값 삭제
        pq.shift();
      } else {
        // 최댓값 삭제
        pq.pop();
      }
    }
  }

  // 결과 리턴
  if (pq.length == 0) return [0, 0];
  else return [pq[pq.length - 1], pq[0]];
}
