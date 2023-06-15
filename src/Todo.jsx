const Todo = ({ todo, handleDelete, handleComplete }) => {
    const { id, title, content, isDone } = todo;

    const onDeleteClick = () => {
      handleDelete(id);
    };

    const onCompleteClick = () => {
      handleComplete(id);
    };

    return (
      <div className="form-todo">
        <h3>제목: {title}</h3>
        <p>내용: {content}</p>
        <p>완료여부: {isDone ? "완료됨" : "미완료"}</p>
        <button onClick={onDeleteClick}>삭제</button>
        {!isDone && <button onClick={onCompleteClick}>완료</button>}
      </div>
    );
  };  

  export default Todo 