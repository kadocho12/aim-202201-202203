import { memo, VFC } from "react"

type Props = {
  onChange: (e: any) => void;
  value: string;
  disabled: boolean;
}

export const TaskContent: VFC<Props> = memo((props) => {

  const { onChange, value, disabled } = props;

  return (
    <input type="text" value={value} disabled={disabled} onChange={(e) => onChange(e)} className="inputText" />
  )
});