function solution(progresses, speeds) {
  var answer = [];
  const day = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

  let sum = 0;
  day.map((item) => {
    if (item <= day[0]) {
      sum++;
    } else {
      answer.push(sum);
      day[0] = item;
      sum = 1;
    }
  });
  if (sum) {
    answer.push(sum);
  }

  return answer;
}
