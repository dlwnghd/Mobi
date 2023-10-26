import { Todo } from "..";

interface OneTodo {
  todo: Todo;
}

const OneTodo = ({ todo }: OneTodo) => {
  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.content}</div>
      <div
        style={{
          color: todo.state ? "green" : "red",
        }}
      >
        {todo.state ? "Done" : "Not Done"}
      </div>
    </>
  );
};
export default OneTodo;
