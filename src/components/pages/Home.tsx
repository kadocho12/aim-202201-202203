import { memo, VFC } from "react";
import { TodoList } from "../organisms/TodoList";

export const Home: VFC = memo(() => {
  return (
    <div>
      <h2>Todoリスト with Typescript</h2>
      <TodoList />
    </div>
  )
});