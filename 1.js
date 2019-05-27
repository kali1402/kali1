// 1. var 를 let, const 로 대체 했을때의 장점을 설명하십시오.

const a = 'let과 const 로 선언된 변수는 블록 레벨 스코프를 가진다.\n{} 내부에 변수를 선언하면 해당 블록 내부에만 생명주기를 유지한다.'

console.log();
console.log(a);


// 2. 조원들의 이름, 나이, 생일의 객체를 가진 배열을 생성하십시오.

const chobby = {
    name : '김우빈',
    age : 18,
    birth : '3/12'
};

const lrving = {
    name : '문서준',
    age : 18,
    birth : '5/23'
};

const kali = {
    name : '김현준',
    age : 18,
    birth : '8/13'
};

const sunny = {
    name : '박수진',
    age : 18,
    birth : '10/22'
};
const karen = {
    name : '이다빈',
    age : 18,
    birth : '12/10'
}

const user = [
    chobby, lrving, kali, sunny, karen
];

// 3. 반복문을 사용하여 위에 생성한 배열의 조원들 이름을 출력해봅니다.

for(const names of user){
    console.log();
    console.log('----------------------------');
    console.log('이름 : '+names.name);
    console.log('나이 : '+names.age);
    console.log('생일 : '+names.birth);
}