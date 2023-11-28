// 문제 설명
// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

// Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

// Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
// 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
// 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
// 입출력 예
// brown	yellow	return
// 10	2	[4, 3]
// 8	1	[3, 3]
// 24	24	[8, 6]

const brown = [10, 8, 24];
const yellow = [2, 1, 24];

function solution(brown, yellow) {
  const answer = [];
  //갈색과 노란색 격자의 수를 합쳐 카펫의 총 격자 갯수를 구한다
  const sum = brown + yellow;

  //카펫의 세로길이는 가운데가 노란색, 위아래가 갈색이 감싸고 있는 경우를 생각해 3부터 시작한다
  for (let height = 3; height <= brown; height++) {
    //총 격자의 수를 세로로 나눈 나머지가 없을경우에만
    if (sum % height === 0) {
      //가로길이는 가로 세로 길이 합을 세로길이로 나눈 값
      const width = sum / height;

      //테두리(2)를 제외한 가로와 세로 길이를 곱한후 그 값이 yellow와 같을 경우 가로와 세로 길이를 반환
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
  return answer;
}
