function solution(numbers, target) {
  var answer = 0;
  function dfs(index, tot) {
    if (index === numbers.length) {
      if (tot === target) ++answer;
      return;
    }
    dfs(index + 1, tot + numbers[index]);
    dfs(index + 1, tot - numbers[index]);
  }
  dfs(0, 0);
  return answer;
}
