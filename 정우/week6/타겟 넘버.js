let answer = 0;
let global_numbers = [];
let global_target = 0;

function solution(numbers, target) {
  global_numbers = numbers;
  global_target = target;

  dfs(0, 0);

  return answer;
}

function dfs(depth, sum) {
  if (depth < global_numbers.length) {
    dfs(depth + 1, sum + global_numbers[depth]);
    dfs(depth + 1, sum - global_numbers[depth]);
  } else {
    if (sum === global_target) {
      answer += 1;
    }
  }
}
