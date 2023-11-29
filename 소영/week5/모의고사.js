function solution(answers) {
  var answer = [];

  // 수포자들이 찍는 패턴과 채점 결과를 각각 배열로 변환해줌
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score = [0, 0, 0];

  // 정답이 들은 배열 answers가 주어졌을 때, 문제를 맞힌 횟수를 score에 넣어줌
  for (let i = 0; i < answers.length; i++) {
    if (p1[i % p1.length] === answers[i]) {
      score[0]++;
    }
    if (p2[i % p2.length] === answers[i]) {
      score[1]++;
    }
    if (p3[i % p3.length] === answers[i]) {
      score[2]++;
    }
  }

  // Math.max를 이용해서 가장 문제를 많이 맞힌 사람을 return해줌
  const max = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}
