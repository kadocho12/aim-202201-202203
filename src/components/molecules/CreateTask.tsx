import { Dispatch, memo, SetStateAction, useState, VFC } from "react"
import { Todo } from "../../types/Todo";
import { CreateButton } from "../atoms/CreateButton";
import { InputTask } from "../atoms/InputTask";

type Props = {
  // inputValue: string;
  // setInputValue: Dispatch<SetStateAction<string>>;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}


export const CreateTask: VFC<Props> = memo((props) => {
  
  const [inputValue, setInputValue] = useState("");
  // const { inputValue, setInputValue, todos, setTodos } = props;
  const { todos, setTodos } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    }
    
    if (inputValue === "") return;
    setTodos([newTodo, ...todos]);
    setInputValue("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <InputTask inputValue={inputValue} setInputValue={setInputValue} />
      <CreateButton>作成</CreateButton>
    </form>
  )
});