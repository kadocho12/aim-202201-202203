import { memo, useState, VFC } from "react";
import { Todo } from "../../types/Todo";
import { CreateTask } from "../molecules/CreateTask";
import { TaskList } from "../molecules/TaskList";

export const TodoList: VFC = memo(() => {
  // const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <CreateTask
        // inputValue={inputValue}
        // setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
      />
      <TaskList
        todos={todos}
        setTodos={setTodos}
      />
    </>
  )
});