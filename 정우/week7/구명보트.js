function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  let lightestIdx = 0;
  let heaviestIdx = people.length - 1;

  while (lightestIdx <= heaviestIdx) {
    if (people[lightestIdx] + people[heaviestIdx] <= limit) {
      lightestIdx += 1;
      heaviestIdx -= 1;
    } else {
      heaviestIdx -= 1;
    }
    answer += 1;
  }

  return answer;
}
