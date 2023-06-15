import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "아침 시간에 할 거", content: "발닦기", isDone: false },
    { id: 2, title: "아침 시간에 할 거", content: "이닦기", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState(false);

  const addTodoHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: todo.length + 1,
      title: title,
      content: content,
      isDone: isDone,
    };
    setTitle("");
    setContent("");
    setIsDone(false);
    setTodo([...todo, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = todo.filter((todo) => todo.id !== id);
    setTodo(newTodoList);
  };

  const completeTodoHandler = (id) => {
    const newTodoList = todo.map((work) => {
      if (work.id === id) {
        return { ...work, isDone: true };
      }
      return work;
    });
    setTodo(newTodoList);
  };

  const onChangeTitleHandler = (event) => {
    const inputTitle = event.target.value;
    setTitle(inputTitle);
  };

  const onChangeContentHandler = (event) => {
    const inputContent = event.target.value;
    setContent(inputContent);
  };

  return (
    <>
      <header className="header">
        <h1>TO-DO LIST</h1>
      </header>
      <form className="form">
        <span>제목: </span>
        <input type="text" onChange={onChangeTitleHandler} value={title} />
        <span>내용: </span>
        <input type="text" onChange={onChangeContentHandler} value={content} />
        <button onClick={addTodoHandler}>추가하기</button>
      </form>
      <main className="main">
        <article className="left-todo">
          <h2>TODO!</h2>
          {todo.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  handleDelete={deleteTodoHandler}
                  handleComplete={completeTodoHandler}
                />
              );
            }
            return null;
          })}
        </article>
        <article className="right-todo">
          <h2>COMPLETE!</h2>
          {todo.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  handleDelete={deleteTodoHandler}
                  handleComplete={completeTodoHandler}
                />
              );
            }
            return null;
          })}
        </article>
      </main>
    </>
  );
}

export default App;
