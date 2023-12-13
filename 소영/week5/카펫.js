function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;

  //카펫의 높이는 3부터 시작 <- 위 아래는 갈색 가운데는 노란색이므로
  for (let height = 3; height <= brown; height++) {
    //높이로 나눠떨어질 때만
    if (sum % height === 0) {
      //가로
      let weight = sum / height;
      //갈색 제외한 길이를 구해야해서 각각 -2해준뒤 곱해줌
      //곱해서 나온 개수가 노란색의 개수와 같으면 카펫의 가로, 세로 리턴해줌
      if ((height - 2) * (weight - 2) === yellow) {
        return [weight, height];
      }
    }
  }
}
