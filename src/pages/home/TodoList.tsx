import TodoItem from "./TodoItem";
import { ITodoType } from "./Todo";

import "./TodoList.scss";

interface IPropsType {
  todoList: ITodoType[];
  changeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoList(props: IPropsType) {
  const { todoList, changeTodo, deleteTodo } = props;

  const todoListDom = todoList.map((todo: ITodoType, index: number) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      changeTodo={changeTodo}
      deleteTodo={deleteTodo}
    ></TodoItem>
  ));
  return (
    <div style={{ backgroundColor: "#f3f3f3", height: "500px" }}>
      {todoListDom}
    </div>
  );
}
export default TodoList;
