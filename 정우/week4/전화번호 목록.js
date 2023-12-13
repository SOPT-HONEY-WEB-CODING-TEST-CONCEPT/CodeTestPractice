function solution(phone_book) {
  let answer = true;
  const hashMap = {};

  for (let i = 0; i < phone_book.length; i++) {
    hashMap[phone_book[i]] = true;
  }

  for (let i = 0; i < phone_book.length; i++) {
    for (let j = 1; j < phone_book[i].length; j++) {
      const prefix = phone_book[i].slice(0, j);

      if (hashMap[prefix]) {
        answer = false;
        return answer;
      }
    }
  }

  return answer;
}
