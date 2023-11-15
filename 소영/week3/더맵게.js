class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    // 힙의 맨 뒤에 push
    this.heap.push(value);
    // value가 push 된 위치
    let index = this.size() - 1;

    // 부모 노드와 값 비교하면서 오름차순 정렬
    // Math.floor((index - 1) / 2) : index의 부모 노드
    while (index > 0 && this.heap[index] < this.heap[Math.floor((index - 1) / 2)]) {
      // 값 바꿔 넣으면서 this.heap[index]의 값이 달라질 것이므로 바뀌기 전에 먼저 변수에 저장해줌
      const temp = this.heap[index];
      this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
      this.heap[Math.floor((index - 1) / 2)] = temp;
      //부모와 값이 바꼈기 때문에 index를 부모의 index로 바꿔줌
      index = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const minValue = this.heap[0];
    // 끝에 있는 노드를 부모로 지정
    this.heap[0] = this.heap.pop();
    let index = 0;

    // 오름차순 정렬
    // 왼쪽 자식이 힙 길이 보다 작을 때까지 오른쪽 자식이 힙 길이보다 작거나 같을 때까지로 해도 됨( index*2+2 <= this.size())
    while (index * 2 + 1 < this.size()) {
      // 자식들 중 더 작은 값의 index 구함
      let minChildIndex = this.heap[index * 2 + 2] < this.heap[index * 2 + 1] ? index * 2 + 2 : index * 2 + 1;

      //부모가 자식보다 작으면(오름차순 만족하면) while문 탈출
      if (this.heap[index] < this.heap[minChildIndex]) {
        break;
      }

      //위의 push와 같은 로직
      const temp = this.heap[index];
      this.heap[index] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      index = minChildIndex;
    }
    return minValue;
  }
}

function solution(scoville, K) {
  //섞은 횟수 0으로 할당
  var answer = 0;
  //객체 생성
  const heap = new MinHeap();
  //forEach 문으로 순회하며 scoville 배열의 요소들을 heap에 넣어줌
  scoville.forEach((item) => heap.push(item));
  while (heap.size() >= 2) {
    if (heap.peek() < K) {
      if (heap.size() > 0) {
        //스코빌 지수가 가장 작은 값 꺼냄
        const first = heap.pop();
        //스코빌 지수가 두번째로 작은 값 꺼냄
        const second = heap.pop();
        //섞은 음식의 스코필 지수 넣어줌
        heap.push(first + second * 2);
        //섞은 횟수 1씩 증가
        answer++;
      } else {
        //스코빌 지수가 K이하이지만 더 이상 섞어 만들 수 없을 때 반복문 탈출
        break;
      }
    } else {
      //스코빌 지수가 K이상이 될 때 반복문 탈출
      break;
    }
  }
  // 스코빌 지수의 최솟값이 K와 같거나 K보다 크면 answer 반환 아니라면 -1 반환
  return heap.peek() >= K ? answer : -1;
}
