let _number : number;
_number = 1;

let _string : string;
_string = "텍스트";

let _boolean : boolean;
_boolean = true;
_boolean = false;

let _any: any;
_any = undefined

// Any can do Anything. Not recommand to use.
// _any.foo();
// _any();
// _any.bar = 100;
// _any = "string"
// let n:number = _any;

interface Person { name: string; age: number }

function greet(person: Person) {
    return "Hello " + person.name;
}

greet({name:"Bob", age:99})

let _array1:number[];
_array1 = [1,2,3]

let _array2:Array<number>
_array2 = [4,5,6]

function CompareWithAny(a:any) {
    return a.b();
}

let _union1: string | number
_union1= "텍스트"

let _union2: string | number
_union2 = 1

let _union3: "TypeScript" | "JavaScript" | "React" | "Next"
_union3 = "TypeScript"

let unionArr1: (string | number)[];
unionArr1 = [1, 2, 3, "4", "5", 6];

type User = true;
type Admin = false;

type Account<T> = T extends boolean & true ? User : Admin

type UserAccount = Account<true>

const userAccount: UserAccount = true;

type LogInfo = {
    userID      : number;
    userName    : string;
    createdAt   : Date;
    updatedAt   : Date;
    AuthCode    : string;
}

interface UserInfo {
  name: string;
  star: number;
}

interface DetailUserInfo extends UserInfo {
  address: string;
  phone: string;
}

const Colors = {   
  red: "#FF0000",   // readonly red: "#FF0000";
  blue: "#0000FF",  // readonly blue: "#0000FF";
  green: "#008000", // readonly green: "#008000";
} as const;

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

interface TodoType {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<TodoType, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

const TodoName: Pick<Todo, "title"> = {
  title: "Brush Teeth",
};

const TodoNameWithCompleted: Pick<TodoType, "title" | "completed"> = {
  title: "Brush Teeth",
  completed: true,
};

type arrayType = "react" | "nextjs" | "ts" | "monorepo";
type reactWithType = Extract<arrayType, "react">; // "react"

let isTop: reactWithType = "react";

type MakeTodo = ReturnType<(todoInfo: TodoType) => void>;

function todoMarker(newTodo: TodoType): MakeTodo {
  console.log(newTodo);
  return;
}

todoMarker({
  title: "Read Docs",
  description: "reading typescript docs",
  completed: false,
});

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

const isHuman = {
  name: "Bob",
  age: "30",
  wishMovieList: ["Intime", "InterStella"],
} satisfies Record<"name" | "age" | "wishMovieList", string | string[]>;

isHuman.name.toUpperCase();

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