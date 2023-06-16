const Todo = ({ todo, handleDelete, handleComplete, handleCancel }) => {
  const { id, title, content, isDone } = todo;

  const onDeleteClick = () => {
    handleDelete(id);
  };

  const onCompleteClick = () => {
    handleComplete(id);
  };
  const onCancelClick = () => {
    handleCancel(id);
  };

  return (
    <div className="form-todo">
      <h3>제목: {title}</h3>
      <p>내용: {content}</p>
      <p>완료여부: {isDone ? "완료됨" : "미완료"}</p>
      <button className="todo-delete-btn" onClick={onDeleteClick}>
        삭제
      </button>
      {isDone && (
        <button className="todo-cancel-btn" onClick={onCancelClick}>
          취소
        </button>
      )}
      {!isDone && (
        <button className="todo-complete-btn" onClick={onCompleteClick}>
          완료
        </button>
      )}
    </div>
  );
};

export default Todo;
