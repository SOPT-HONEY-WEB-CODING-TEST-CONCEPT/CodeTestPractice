function solution(participant, completion) {
  var answer = '';
  //참여한 선수들의 이름과 완주한 선수들의 이름이 담긴 배열을 sort함수로 정렬
  participant.sort();
  completion.sort();

  //동일한 순서로 정렬 된 후 참가자 배열 순회
  for (var i = 0; i < participant.length; i++) {
    // 두 배열에서 같은 index에 있는 값이 다른 경우에 참가자의 이름을 answer에 넣어줌(해당 참가자가 완주를 하지 못한 참가자이므로)
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
