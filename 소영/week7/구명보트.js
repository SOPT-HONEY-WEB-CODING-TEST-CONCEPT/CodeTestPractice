function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  for (let i = 0, j = people.length - 1; i <= j; i++) {
    // 가장 가벼운 사람과 무거운 사람을 동시에 태운다고 가정
    // 둘이 같이 탈 수 있으면 무거운 사람 + 가벼운 사람 승차
    if (people[i] + people[j] <= limit) {
      console.log(people[i] + people[j]);
      j--;
    }
    // 둘이 탈 수 없을 경우 무거운 1명만 승차
    answer++;
  }
  return answer;
}
