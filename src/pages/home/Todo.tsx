import { useState } from "react";

import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import TodoFilter from "./TodoFilter";

export interface ITodoType {
  id: number;
  text: string;
  isFinished: boolean;
}

function Todo() {
  // 代办列表
  const [todoList, setTodoList] = useState<ITodoType[]>([
    {
      id: 1654454294510,
      text: "吃饭",
      isFinished: false,
    },
    {
      id: 1654454294512,
      text: "看书",
      isFinished: true,
    },
    {
      id: 1654454294530,
      text: "健身",
      isFinished: false,
    },
    {
      id: 1654454294540,
      text: "睡觉",
      isFinished: false,
    },
  ]);

  // 修改代办
  const changeTodo = (id: number) => {
    const newTodoList = todoList.map((item) => {
      if (item.id !== id) {
        return item;
      }
      return {
        ...item,
        isFinished: !item.isFinished,
      };
    });
    setTodoList(newTodoList);
  };
  // 删除代办
  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(newTodoList);
  };
  // 添加代办
  const addTodo = (todo: ITodoType) => {
    setTodoList([...todoList, todo]);
  };

  return (
    <div className="todo">
      <TodoInput addTodo={addTodo}></TodoInput>
      <TodoFilter></TodoFilter>
      <TodoList
        todoList={todoList}
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
      ></TodoList>
    </div>
  );
}
export default Todo;
