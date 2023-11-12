function solution(array, commands) {
    var answer = [];
    for (var i of commands){
        var newArray= array.slice(i[0]-1, i[1]);
        newArray.sort((a,b)=>(a-b));
        answer.push(newArray[i[2]-1]);
    }
    
    return answer;
}