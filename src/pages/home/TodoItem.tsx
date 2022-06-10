import { ITodoType } from "./Todo";

import "./TodoItem.scss";
interface IPropsType {
  todo: ITodoType;
  changeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function ToDoItem({ todo, changeTodo, deleteTodo }: IPropsType) {
  const changeHandler = () => {
    changeTodo(todo.id);
  };
  const deleteHandler = () => {
    deleteTodo(todo.id);
  };

  const textStyle = {
    textDecoration: todo.isFinished ? "line-through" : "none",
  };

  return (
    <div
      className="todo-item"
    >
      <input
        style={{ cursor: "pointer" }}
        type="checkbox"
        checked={todo.isFinished}
        onChange={changeHandler}
      />
      <span style={textStyle}>{todo.text}</span>
      <div className="btn">
        <button style={{ cursor: "pointer" }} onClick={deleteHandler}>
          删除
        </button>
      </div>
    </div>
  );
}
export default ToDoItem;
