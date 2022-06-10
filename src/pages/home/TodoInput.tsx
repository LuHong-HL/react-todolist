import React, { useState } from "react";
import { ITodoType } from "./Todo";

interface IPropsType {
  addTodo: (todo: ITodoType) => void;
}

function ToDoInput(props: IPropsType) {
  const { addTodo } = props;
  // 创建受控组件
  const [text, setText] = useState("");
  const changeTextHandler = (e: React.ChangeEvent) => {
    setText((e.target as HTMLInputElement).value);
  };

  // 添加代办
  const addTodoHandler = () => {
    if (!text) return;
    addTodo({
      id: Date.now(),
      text: text,
      isFinished: false,
    });
    setText("");
  };
  return (
    <div className="ToDoInput">
      <input
        placeholder="请输入代办事项"
        type="text"
        value={text}
        onChange={changeTextHandler}
      />
      <button style={{ cursor: "pointer" }} onClick={addTodoHandler}>
        添加
      </button>
    </div>
  );
}

export default ToDoInput;
