import TodoItem from "./TodoItem";
import { ITodoType } from "./Todo";
import { ReactSortable } from "react-sortablejs";

import "./TodoList.scss";

interface IPropsType {
  todoList: ITodoType[];
  changeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  setTodoList: (todoList: ITodoType[]) => void;
}

function TodoList(props: IPropsType) {
  const { todoList, changeTodo, deleteTodo, setTodoList } = props;

  const todoListDom = (
    <ReactSortable
    animation={200}
    ghostClass='blue-background-class'
    delay={2}
    list={todoList} setList={setTodoList}>
      {todoList.map((todo: ITodoType) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          deleteTodo={deleteTodo}
        ></TodoItem>
      ))}
    </ReactSortable>
  );

  return (
    <div className="todo-list" style={{ backgroundColor: "#f3f3f3", height: "500px" }}>
      {todoListDom}
    </div>
  );
}
export default TodoList;
