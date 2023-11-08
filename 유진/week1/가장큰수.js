function solution(numbers) {
    var answer= numbers
    .map(n=>n.toString())
    .sort((a,b)=> (b+a)-(a+b));
    
    return answer[0]==='0'?'0':answer.join('');
}