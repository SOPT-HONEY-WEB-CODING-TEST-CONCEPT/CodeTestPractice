// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
// 입출력 예
// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]
// 입출력 예 설명
// 입출력 예 #1

// 수포자 1은 모든 문제를 맞혔습니다.
// 수포자 2는 모든 문제를 틀렸습니다.
// 수포자 3은 모든 문제를 틀렸습니다.
// 따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

// 입출력 예 #2

// 모든 사람이 2문제씩을 맞췄습니다.

const answers = [
  [1, 2, 3, 4, 5],
  [1, 3, 2, 4, 2],
];

function solution(answers) {
  const answer = [];

  //각 수포자들이 답을 찍는 방법
  const firstSoopoza = [1, 2, 3, 4, 5];
  const secondSoopoza = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdSoopoza = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  //각 수포자별 정답 갯수
  const scores = [0, 0, 0];

  //forEach문을 통해 문제의 정답과 각 수포자가 찍은 정답을 비교해준 후
  //답이 같다면 scores의 각 순서에 맞는 값을 1씩 증가시켜준다
  answers.forEach((eachAnswer, idx) => {
    if (eachAnswer === firstSoopoza[idx % firstSoopoza.length]) {
      scores[0]++;
    }
    if (eachAnswer === secondSoopoza[idx % secondSoopoza.length]) {
      scores[1]++;
    }
    if (eachAnswer === thirdSoopoza[idx % thirdSoopoza.length]) {
      scores[2]++;
    }
  });

  //Math.max(...scores)를 통해 scores 중 가장 큰 값을 찾는다
  const highestScorer = Math.max(...scores);

  //scores를 forEach문으로 돌며 가장 큰 값과 같은 점수를 answer배열에 넣어준다
  scores.forEach((score, idx) => {
    if (highestScorer === score) {
      answer.push(idx + 1);
    }
  });

  return answer;
}
