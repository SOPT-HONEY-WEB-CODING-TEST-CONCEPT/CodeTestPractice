function solution(number, k) {
  const array = [];
  for (let i = 0; i < number.length; i++) {
    // 배열의 마지막 숫자랑 현재 숫자를 비교해서 현재 숫자가 더 크다면 해당 숫자를 pop해줌
    while (array.length > 0 && array[array.length - 1] < number[i] && k > 0) {
      // 현재 숫자보다 큰 수가 나올때까지 반복함(최대가 k번)
      k--;
      array.pop();
    }
    array.push(number[i]);
  }
  // 숫자 비교가 끝난 후 k가 0보다 크면 남은 k만큼 삭제(뒤에서)
  array.splice(number.length - k, k);
  return array.join('');
}
