```
 FILENAME   : Task5.md
 PURPOSE    : TypeScript 1주차 Task5 
 AUTHOR     : Bob
 CREATEDATE : 2023-10-24
 UPDATEDATE : -
```

### **TASK.5** 문제 풀어보기


##### 1. 타입을 주어야하는 경우와 주지 않아도 되는 경우를 구분하여 타입을 정의하세요

```jsx
let seongyong = {
    age: 20,
  height: 190,
}

function log(obj){
	console.log(obj.height)
  return obj
}

const a = log(seongyong)
console.log(a.age)
```

```jsx
// 풀이
type User = {
  age:number,
  height:number
}

let seongyong:User = {
    age: 20,
  height: 190,
}

function log(obj:User){
	console.log(obj.height)
  return obj
}

const a = log(seongyong)
console.log(a.age)
```

##### 2. react-typescript project 만들어보기
```jsx
CRA or Vite를 사용하여 타입스크립트 기본 프로젝트를 생성하하여 init하세요

- npx create-react-app [프로젝트 명] --template typescript
- npm create vite@latest [프로젝트 명] --template react-ts
```

##### 3. 생각 해보기
```
type alias와 interface의 차이를 이해해보기

- 각각 type alias와 interface로 타입을 정의하고 주석을 통해 차이점을 작성
- 비교를 통해 무엇을 사용하는게 좋을지 자기 의견을 자유롭게 써볼 것
```

##### 4. react-typescript 적용하기
