function solution(progresses, speeds) {
  var answer = [0];
  var leftDays = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );
  var max = leftDays[0];
  var idx = 0;

  leftDays.forEach((each) =>
    each <= max ? (answer[idx] += 1) : ((max = each), (answer[++idx] = 1))
  );
  return answer;
}
