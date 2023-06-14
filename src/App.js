import React, { useState } from "react";
import "./App.css";


//  TODO 컴포넌트를 분리해서 구현
function Todo(props) {
  return (
    <div className="todo-card">
      <div>{props.todo.title} - </div>
      <div>{props.todo.content}</div>
			{/* //2. 버튼을 컴포넌트로 바꾸기 */}
      <button onClick={() => props.handleDelete(props.todo.id)}>
        삭제하기
      </button>
    </div>
  );
}

function App() {

  const [todo, setTodo] = useState([
    { id: 1, title: '아침 시간에 할 거', content: '발닦기' },
    { id: 2, title: '아침 시간에 할 거', content: '이닦기' }

  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const addTodoHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      content: content,
    };
    setTitle('');
    setContent('');
    
    setTodo([...todo, newTodo]);
    
  };
	const deleteTodoHandler = (id) => {
    const newTodoList = todo.filter((todo) => todo.id !== id);
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
    <div>
      <span>제목: </span>
      <input type="text" onChange={onChangeTitleHandler} value={title} />
      <span>내용: </span>
      <input type="text" onChange={onChangeContentHandler} value={content} />

      {todo.map((todo) => {
        return <Todo todo={todo} key={todo.id} handleDelete={deleteTodoHandler}/>;
      })}


{/* //3. 버튼을 컴포넌트로 바꾸기 */}
<br></br>
<br></br>
      <button onClick={addTodoHandler}>추가하기</button>
    </div>
  );
}

export default App;
