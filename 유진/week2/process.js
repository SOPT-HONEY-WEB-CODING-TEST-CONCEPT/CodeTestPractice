function solution(priorities, location) {
  var answer = 0;
  var tot = 0;
  while (1) {
    var process = priorities.shift();

    if (priorities.some((each) => each > process)) {
      priorities.push(process);
      location -= 1;
      if (location < 0) location = priorities.length - 1;
      continue;
    }
    tot++;
    if (location === 0) return tot;
    location -= 1;
    if (location < 0) location = priorities.length - 1;
  }
}
