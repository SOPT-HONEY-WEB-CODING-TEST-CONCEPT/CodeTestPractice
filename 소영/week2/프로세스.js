function solution(priorities, location) {
  var answer = [];
  const copyData = priorities.slice();
  const data = priorities.map((priority, index) => ({ priority, index }));
  let sum = 0;

  while (data.length !== 0) {
    const max = Math.max(...copyData);
    const { priority, index } = data.shift();
    if (priority === max) {
      sum++;
      copyData[index] = 0;

      if (index === location) {
        break;
      }
    } else {
      data.push({ priority, index });
    }
  }

  return sum;
}
