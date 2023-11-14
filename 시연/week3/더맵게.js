// 문제 설명
// 매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.

// 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
// Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
// Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// scoville의 길이는 2 이상 1,000,000 이하입니다.
// K는 0 이상 1,000,000,000 이하입니다.
// scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
// 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.
// 입출력 예
// scoville	K	return
// [1, 2, 3, 9, 10, 12]	7	2
// 입출력 예 설명
// 스코빌 지수가 1인 음식과 2인 음식을 섞으면 음식의 스코빌 지수가 아래와 같이 됩니다.
// 새로운 음식의 스코빌 지수 = 1 + (2 * 2) = 5
// 가진 음식의 스코빌 지수 = [5, 3, 9, 10, 12]

// 스코빌 지수가 3인 음식과 5인 음식을 섞으면 음식의 스코빌 지수가 아래와 같이 됩니다.
// 새로운 음식의 스코빌 지수 = 3 + (5 * 2) = 13
// 가진 음식의 스코빌 지수 = [13, 9, 10, 12]

// 모든 음식의 스코빌 지수가 7 이상이 되었고 이때 섞은 횟수는 2회입니다.

const scoville = [[1, 2, 3, 9, 10, 12]];

const K = 7;

class MinHeap {
  constructor() {
    this.heap = [];
  }

  length() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (this.heap.length !== 0) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  scoville.forEach((eachScore) => {
    minHeap.push(eachScore);
  });
  //forEach 문으로 돌며 scoville 배열의 각 스코빌 지수를 minHeap배열에 넣어준다

  let mixedCount = 0;
  //섞은 음식의 개수를 0으로 할당해준다

  // 힙 안에 음식이 2개 이상 있고 스코빌 지수가 가장 작은 음식의 수치가 K(7)보다 작을 때까지 반복하며
  while (minHeap.length() >= 2 && minHeap.peek() < K) {
    // 스코빌 지수가 가장 작은 두 음식 섞기
    const first = minHeap.pop();
    //스코빌 지수가 가장 작은 애를 꺼내준다
    const second = minHeap.pop();
    //스코빌 지수가 두번째로 작은 애를 꺼내준다
    const mixedFood = first + second * 2;
    //지수가 두번째로 작은 수를 2배한 수와 지수가 가장 작은 수를 더해 섞은 음식의 스코빌 지수를 구한다
    minHeap.push(mixedFood);
    //기존의 minHeap에 새로 만든 음싞의 스코빌 지수를 추가한다
    mixedCount++;
    //섞은 음식 개수를 증가 시켜준다
  }

  return minHeap.pop() >= K ? mixedCount : -1;
}
