function solution(maps) {
  // x좌표는 우측, y좌표는 아래로 이동할 경우를 1로 표시. (반대 : -1)
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  const row = maps.length;
  const col = maps[0].length;

  // 방문 횟수 리스트
  // 초기값 1로 설정하고 목적지의 값이 1이면 도달하지 못한다고 판단
  // 해당칸에 이동한 경우 값을 1 증가
  const count = [...maps].map((r) => r.map((c) => 1));

  // 시작점 설정
  const queue = [[0, 0]];

  // BFS 시작
  while (queue.length) {
    const [y, x] = queue.shift();

    // 이동 가능한 네 방향을 체크
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // 이동하게 될 x, y 값이 0보다는 크고 맵 보다는 작아야 함(1 : 해당 위치로 이동, 0 : 유지, -1 : 되돌아감)
      if (ny >= 0 && nx >= 0 && ny < row && nx < col) {
        // 해당 위치의 맵이 이동 가능한 상황이고 처음 방문한 경우
        if (maps[ny][nx] === 1 && count[ny][nx] === 1) {
          // 이동한 위치에 이동거리 1 추가
          count[ny][nx] = count[y][x] + 1;
          // queue에 이동한 위치 추가
          queue.push([ny, nx]);
        }
      }
    }
  }

  // 목적지 위치 값이 1이면 도달할 수 없는 위치로 판단하여 -1 을 리턴
  return count[row - 1][col - 1] === 1 ? -1 : count[row - 1][col - 1];
}
