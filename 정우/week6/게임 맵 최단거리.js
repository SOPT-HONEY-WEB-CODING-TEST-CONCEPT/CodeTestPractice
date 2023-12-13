function solution(maps) {
  let answer = 0;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const x = maps[0].length - 1;
  const y = maps.length - 1;
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const now = queue.shift();

    if (now[0] === y && now[1] === x) {
      return now[2];
    }

    for (let i = 0; i < 4; i++) {
      const ny = now[0] + dy[i];
      const nx = now[1] + dx[i];

      if (nx >= 0 && nx <= x && ny >= 0 && ny <= y && maps[ny][nx] === 1) {
        maps[ny][nx] = 0;
        queue.push([ny, nx, now[2] + 1]);
      }
    }
  }

  return -1;
}
