import { memo, VFC } from "react";

type Props = {
  onChange: () => void;
}

export const Checkbox: VFC<Props> = memo((props) => {
  const { onChange } = props;

  return (
    <input
      type="checkbox"
      onChange={() => onChange()}
    /> 
  )
});