import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  // 예시 목록
  const [todo, setTodo] = useState([
    { id: 1, title: "공부", content: "리액트", isDone: false },
    { id: 2, title: "낮잠자기", content: "30분", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState(false);

  const addTodoHandler = (event) => {
    // 유효성 검사
    if (title === "" || content === "") {
      alert("빈값을 채워주세요!");
      return;
    }
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
    setTodo((preTodo) =>
      preTodo.map((work) => (work.id === id ? { ...work, isDone: true } : work))
    );
  };
  const cancelTodoHandler = (id) => {
    setTodo((preTodo) =>
      preTodo.map((work) =>
        work.id === id ? { ...work, isDone: false } : work
      )
    );
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
      <div className="layout">
        <header className="header">
          <h1>TO-DO LIST</h1>
        </header>
        <form className="form">
          <span>제목: </span>
          <input
            className="input-box"
            type="text"
            onChange={onChangeTitleHandler}
            value={title}
          />
          <span>내용: </span>
          <input
            className="input-box"
            type="text"
            onChange={onChangeContentHandler}
            value={content}
          />
          <button className="todo-add-btn" onClick={addTodoHandler}>
            추가하기
          </button>
        </form>
        <main className="main">
          <article className="above-todo">
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
          <article className="under-todo">
            <h2>COMPLETE!</h2>
            {todo.map((todo) => {
              if (todo.isDone) {
                return (
                  <Todo
                    todo={todo}
                    key={todo.id}
                    handleDelete={deleteTodoHandler}
                    handleCancel={cancelTodoHandler}
                  />
                );
              }
              return null;
            })}
          </article>
        </main>
      </div>
    </>
  );
}

export default App;
