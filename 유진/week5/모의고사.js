function solution(answers) {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let idx1 = 0,
    idx2 = 0,
    idx3 = 0;
  let scores = [0, 0, 0];
  let answer = [];
  for (let i = 0; i < answers.length; i++) {
    if (idx1 >= arr1.length) idx1 = 0;
    if (idx2 >= arr2.length) idx2 = 0;
    if (idx3 >= arr3.length) idx3 = 0;
    if (answers[i] == arr1[idx1++]) scores[0] += 1;
    if (answers[i] == arr2[idx2++]) scores[1] += 1;
    if (answers[i] == arr3[idx3++]) scores[2] += 1;
  }
  let maxscore = Math.max(...scores);
  scores.forEach((score, idx) => score === maxscore && answer.push(idx + 1));
  return answer;
}
