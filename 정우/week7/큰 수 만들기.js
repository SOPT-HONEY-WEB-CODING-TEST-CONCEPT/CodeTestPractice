function solution(number, k) {
  let answer = "";
  number = number.split("");
  const stack = [];

  for (let i = 0; i < number.length; i += 1) {
    if (stack.length === 0) {
      stack.push(number[i]);
      continue;
    }

    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }

    stack.push(number[i]);
  }

  answer = stack.join("").substr(0, stack.length - k);

  return answer;
}
