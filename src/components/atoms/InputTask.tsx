import { Dispatch, memo, SetStateAction, useCallback, VFC } from "react"

type Props = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export const InputTask: VFC<Props> = memo((props) => {
  const { inputValue, setInputValue } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  return (
    <input type="text" value={inputValue} onChange={(e) => handleChange(e)} className="inputText" />
  )
});