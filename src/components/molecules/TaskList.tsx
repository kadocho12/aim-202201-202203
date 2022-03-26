import { Dispatch, memo, SetStateAction, VFC } from "react";
import { Todo } from "../../types/Todo";
import { Checkbox } from "../atoms/Checkbox";
import { DeleteButton } from "../atoms/DeleteButton";
import { TaskContent } from "../atoms/TaskContent";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const TaskList: VFC<Props> = memo((props) => {

  const { todos, setTodos } = props;

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TaskContent onChange={(e) => handleEdit(todo.id, e.target.value)} value={todo.inputValue} disabled={todo.checked} />
          <Checkbox onChange={() => handleChecked(todo.id, todo.checked)} />
          <DeleteButton onClick={() => handleDelete(todo.id)}>削除</DeleteButton>
        </li>
      ))}
    </ul>
  )
});