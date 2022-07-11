export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {  
  // todoの状態(完了/未完了)を反転
  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <li key={todo.id}>
      {todo.content}
      <button onClick={handleToggleTodoListItemStatus}>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  );
};
