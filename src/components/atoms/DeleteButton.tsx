import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  // todoId: number;
}

export const DeleteButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;

  return (
    <button type="button" onClick={() => onClick()}>
      { children }
    </button>
  )
});