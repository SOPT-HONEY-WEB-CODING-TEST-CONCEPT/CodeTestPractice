function solution(brown, yellow) {
  var answer = [];
  let garo,
    i = 1;
  garo = (brown - 4) / 2;

  for (; i <= garo / 2; i++) {
    if (i * (garo - i) == yellow) {
      break;
    }
  }

  answer.push(garo - i + 2, i + 2);
  return answer;
}
