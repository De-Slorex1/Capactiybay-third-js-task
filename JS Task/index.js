let arrayOne = [1,2,2,3,3,,4,4,,5,5];

function solution(arry) {
    let obj = new Object
    if(Array.isArray(arry)) {
        arry.forEach(value => {
            obj[value]++;
        })
    }else {
        obj[value] = 1;
    }
    return obj;
}
console.log(solution(arrayOne));