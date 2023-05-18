import { PropsWithChildren } from "react";
import { wrapper } from "./style";

interface Props extends PropsWithChildren {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ onClick, children }: Props) {
  return (
    <button onClick={onClick} css={wrapper}>
      {children}
    </button>
  );
}
