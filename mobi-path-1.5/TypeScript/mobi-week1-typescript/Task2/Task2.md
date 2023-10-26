```
 FILENAME   : Task2.md
 PURPOSE    : TypeScript 1주차 Task2
 AUTHOR     : Bob
 CREATEDATE : 2023-10-25
 UPDATEDATE : -
```

### **TASK.2** 실무에서 자주 사용하는 타입 바로 알기

아래의 타입들이 무엇인지 정의하고, 반드시 예제를 만들어 .ts 파일로 작성해보세요

**Q. 타입스크립트에 어떠한 타입들이 있는지 알고 있는가?**

---

#### 타입스크립트 설치 및 실행 명령어

```shell
npm install -g typescript
tsc Task2.ts
```

---

#### 타입스크립의 기본 타입

##### ✨ number : 숫자형 값만 가능

- ex) 0, 3.41, -5, ...

```tsx
let _number: number;
_number = 1;
// _number = true;      ❌ 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
// _number = "텍스트";  ❌ 'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
```

##### ✨ string : 문자형 값만 가능

- ex) "텍스트", "1", "2023-10-25", "" ...

```tsx
let _string: string;
_string = "텍스트";
// _string = 1;     ❌ 'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
```

##### ✨ boolean : True 혹은 False 값

```tsx
let _boolean: boolean;
_boolean = true;
_boolean = false;
// _boolean = 1;    ❌ 'number' 형식은 'boolean' 형식에 할당할 수 없습니다.ts(2322)
```

##### ✨ any : 어떤 형태의 값이든 다 가능

- 하지만, 사용을 추천하지는 않는다.
- TS를 쓰는 의미가 없어지기 때문

```tsx
let _any: any;
_any = undefined;

// any는 어떤 타입도 다 가능하다고 보기 때문에 에러 확인이 거의 불가능하다.
_any.foo();
_any();
_any.bar = 100;
_any = "string";
let n: number = _any;
```

##### ✨ object : 프로퍼티를 가지고 있는 모든 JavaScript 값

- 프로퍼티의 타입을 검사한다.

```tsx
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}

greet({ name: "Bob", age: 99 });
// greet({name:"Bob", age:"99"}) ❌
// 'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
// Task2.ts(31, 34): 필요한 형식은 여기에서 'Person' 형식에 선언된 'age' 속성에서 가져옵니다.
```

##### ✨ array : 배열

```tsx
let _array1: number[];
_array1 = [1, 2, 3];

let _array2: Array<number>; // 제네릭 형식
_array2 = [4, 5, 6];

// _array1 = [1,2,'3']  ❌ 'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
// _array2 = [4,5,'6']  ❌ 'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
```

##### ✨ unknown : 알 수 없는

- 어떤 작업도 수행할 수 없으므로 any 보다 더 안전하다

```tsx
function CompareWithAny(a: any) {
  return a.b();
}

// function _unknown(a:unknown) {
//     return a.b();    ❌ 'a'은(는) 'unknown' 형식입니다.ts(18046)
// }
```

##### ✨ union : 공용체 유형의 매개변수 타입

- 여러 타입의 변수를 받을 수 있고 OR 처리

```tsx
let _union1: string | number;
_union1 = "텍스트";

let _union2: string | number;
_union2 = 1;

let _union3: "TypeScript" | "JavaScript" | "React" | "Next";
_union3 = "TypeScript";
// _union3 = "Java" ❌ '"Java"' 형식은 '"TypeScript" | "JavaScript" | "React" | "Next"' 형식에 할당할 수 없습니다.ts(2322)

// ⚠️소괄호 주의
let unionArr1: [string | number][];
unionArr1 = [1, 2, 3, "4", "5", 6];

let unionArr1: (string | number)[];
unionArr1 = [1, 2, 3, "4", "5", 6];
```

##### ✨ conditional : 조건부 유형의 매개변수 타입

- 조건에 따라 타입 지정 ?, |, &

```tsx
type User = true;
type Admin = false;

type Account<T> = T extends boolean & true ? User : Admin;

type UserAccount = Account<true>;

const userAccount: UserAccount = true;
```

##### ✨ type alias : 재사용과 원하는 명칭의 프로퍼티에 타입을 줄 수 있다.

```tsx
type LogInfo = {
  userID: number;
  userName: string;
  createdAt: Date;
  updatedAt: Date;
  AuthCode: string;
};
```

##### ✨ interface : 객체의 프로퍼티 타입 정의와 인터페이스의 확장이 가능하다.

```tsx
interface UserInfo {
  name: string;
  star: number;
}

interface DetailUserInfo extends UserInfo {
  address: string;
  phone: string;
}
```

#### 타입스크립트의 유틸리티 타입

##### ✨ enum : (숫자, 문자, 이종, 유니언...) 열거형

- 특정 값을 고정하는 독립된 자료형
- 키워드를 통해 정의 할 수도 있고, 초기화 하지 않고 사용하는 것도 가능하다.

```tsx
enum Direction {
  Up = 1, // 1
  Down, // 2
  Left, // 3
  Right, // 4
}

// UP은 1, Down은 2, Left는3, Right는 4로 뒤따르는 멤버들은 자동으로 증가된 값을 가진다.

// ⬇️ 정의 하지 않을 경우는 멤버들은 0부터 자동으로 증가된 값을 가집니다.
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

// ⚠️boolean 타입 사용 시 true: 1, false: 0 의 숫자값을 상수 값으로 만들기 때문에 메모리 낭비가 발생할 수도 있습니다.
enum BooleanEnumType {
  false,
  true,
}

console.log(BooleanEnumType[0]); // false
console.log(BooleanEnumType["true"]); // 1
```

##### ✨ as const : Primitive Type을 Literal Type으로 지정해주는 것

- 실제값을 가지게 된다

```tsx
const Colors = {
  red: "#FF0000", // readonly red: "#FF0000";
  blue: "#0000FF", // readonly blue: "#0000FF";
  green: "#008000", // readonly green: "#008000";
} as const;

Colors.red = "FF0001"; // ❌ 읽기 전용 속성이므로 'red'에 할당할 수 없습니다.ts(2540)
```

##### ✨ partial : Type 집합의 모든 프로퍼티를 선택적으로 타입을 생성

- 주어진 타입의 모든 하위 타입 집합을 나타내는 타입을 반환

```tsx
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// 타입들이 무조건 필요하지않고 있어도되고 없어도 됩니다. 옵셔널 타입과 같습니다.
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

##### ✨ omit : omit은 해당 타입을 제외한 나머지 부분만 사용

- 여러개를 제외하고 싶다면 | 연산자를 이용합니다.
- pick의 반대

```tsx
interface TodoType {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<TodoType, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
```

##### ✨ pick : pick은 일정한 타입 부분만을 추출해서 사용

- 여러개를 사용하고 싶다면 | 연산자를 이용합니다.
- omit의 반대

```tsx
const TodoName: Pick<TodoType, "title"> = {
  title: "Brush Teeth",
};

const TodoNameWithCompleted: Pick<TodoType, "title" | "completed"> = {
  title: "Brush Teeth",
  completed: true,
};
```

##### ✨ extract : Extract<T, U>

- Extract에는 T에 포함되는 U중에 일치하는 않는 값만 들어갈 수 있습니다.
- Type에는 Union타입들이 들어가고 해당 Union 들어갈 수 있는 값들이 들어갑니다.
- Union에 값을 | 을 이용하여 추가할 수 있습니다.

```tsx
type arrayType = "react" | "nextjs" | "ts" | "monorepo";
type reactWithType = Extract<arrayType, "react">; // "react"

let isTop: reactWithType = "react";
// arrayType에 "react"로 들어갈 수 있는건 "react" 뿐입니다.
```

##### ✨ returntype : 함수 Type의 반환 타입으로 구성된 타입을 생성

- 함수의 설계서와 같이 함수의 인수부터 반환까지의 타입을 지정하여 추출해줍니다.
- 반환타입을 추론하거나 다른 곳에서 사용할 때 유용합니다.

```tsx
type MakeTodo = ReturnType<(todoInfo: TodoType) => void>;

function todoMarker(newTodo: TodoType): MakeTodo {
  console.log(newTodo);
  return;
}

todoMarker({ title: "Read Docs", description: "reading typescript docs", completed: false });

// MakeTodo이라는 리턴타입의 지정된 인수와 다르거나 리턴타입이 다르면 오류가 발생합니다.
function scheduleChecker(check): MakeTodo {
  return "스케줄 체크"; // TS2322: Type 'string' is not assignable to type 'void'.
}
```

##### ✨ optional : optional 타입은 해당 타입을 전달을 받아도되고 안받아도 상관이 없습니다.

```tsx
type DeveloperType = {
  number?: number;
  name: string;
};

const FE_Bob: DeveloperType = {
  number: 0,
  name: "Bob",
};

const FE_one: DeveloperType = {
  number: 1,
  name: "Tester",
};

const FE_teacher: DeveloperType = {
  name: "강선생",
};
```

##### ✨ satisfies : satisfies는 객체 타입의 검사용으로 사용이 됩니다. 이는 타입스크립트 4.9 버전에서 출시한 것으로 기존에는 Record 타입으로 검사가 가능하였습니다.

```tsx
const Human: Record<"name" | "age" | "wishMovieList", string | string[]> = {
  name: "Bob",
  age: "30",
  wishMovieList: ["Intime", "InterStella"],
};

// 위 코드에서는 문제점을 발견하지 못합니다. 하지만 아래에서 문제가 발생합니다.
Human.name.toUpperCase();

// name의 타입이 string | number | string[] 타입으로 인식이 되는 바람에 toUpperCase()를 사용하지 못하는 것입니다.
// satisfies를 사용한다면 타입을 알려줄 수 있습니다.

const isHuman = {
  name: "Bob",
  age: "30",
  wishMovieList: ["Intime", "InterStella"],
} satisfies Record<"name" | "age" | "wishMovieList", string | string[]>;

isHuman.name.toUpperCase();
// isHuman.name을 string으로 인식을 하기 때문에 toUpperCase()를 사용할 수 있습니다.
```

##### ✨ generic : generic은 전달받은 타입을 기준으로 정해진 위치에 해당 타입에 대한 정보를 넣어줍니다.

```tsx
type UserGenericType<T, U, C> = {
  name: T;
  age: U;
  isMan: C;
};

const newUser1: UserGenericType<string, number, boolean> = {
  name: "Bob",
  age: 20,
  isMan: true,
};

// 지금 같은 경우에는 T에 number가 들어갔기 때문에 name에서 number 타입의 값을 원하고 있습니다.
const newUser2: UserGenericType<number, string, boolean> = {
  name: "Bob", // TS2322: Type 'string' is not assignable to type 'number'.
  age: "20",
  isMan: true,
};

// 리액트의 useState의 타입을 보면 제네릭이 잘 적용되어있는 것을 볼 수 있습니다.
// 전달 받은 타입으로 값의 타입이 만들어지고 해당 값이 변환되는 함수가 있고 반환도 해당 타입으로 나와집니다.
type useStateType = ReturnType<
  <T>(initialState: T) => [item: T, setItem: DisPatch<setStateAction<T>>]
>;
```
