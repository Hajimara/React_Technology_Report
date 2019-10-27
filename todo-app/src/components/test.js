const array = [1, 2, 3, 4, 5];

const nextArrayBad = array;
nextArrayBad[0] = 100;
console.log(array === nextArrayBad); // 완전히 같은 배열을 가리키기 때문에 true

const nextArrayGood = [...array]; //배열 내부의 값을 모두 복사 
nextArrayGood[0] = 100;
console.log(array === nextArrayGood); // 다른 배열을 가리키고 있기 때문에 false 

const object = {
    foo: 'bar',
    value: 1
}

const nextObjectBad = object; // 같은 객체를 가리킨다.
nextObjectBad.value = nextObjectBad.value + 1;
console.log(object === nextObjectBad); // true

const nextObjectGood = {
    ...object,
    value: object.value + 1
}; // 기존 내용을 모두 복사해서 넣고 새로운 값을 덮어 씌운다..
console.log(object === nextObjectGood); // 다른객체를 가리키기 때문에 false

