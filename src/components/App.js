import { useRef } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoTitle } from "./TodoTitle";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

function App() {
  const { 
    todoList, 
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();

  // todo入力フォームで利用
  const inputEl = useRef(null);

  // 入力フォームで入力された文字列を新しいTODOに登録するための関数
  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  console.log("TODOリスト：", todoList);

  const inCompletedList = todoList.filter( todo => !todo.done);
  const completedList = todoList.filter( todo => todo.done);

  console.log("未完了TODOリスト：", inCompletedList);
  console.log("完了TODOリスト：", completedList);

  return (
    <>
     <TodoTitle title="Todo進捗管理" as="h1"></TodoTitle>

     <TodoAdd inputEl={inputEl}
              handleAddTodoListItem={handleAddTodoListItem}/>

     <TodoTitle title="未完了Todoリスト" as="h2"></TodoTitle>
     <TodoList 
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />

     <TodoTitle title="完了Todoリスト" as="h2"></TodoTitle>
     <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
    </>
  );
}

export default App;