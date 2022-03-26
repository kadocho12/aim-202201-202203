import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
}

export const CreateButton: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <button type="submit" className="submitButton">
      {children}
    </button>
  )
});