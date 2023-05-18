import { css } from "@emotion/react";

interface Props {
  children: React.ReactNode;
  flexFlow?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  gap?: number;
}

const FlexBox = ({ children, ...props }: Props) => {
  return <div css={getFlexBoxStyle(props)}>{children}</div>;
};

const getFlexBoxStyle = ({
  flexFlow = "row wrap",
  justifyContent = "flex-start",
  alignItems = "stretch",
  alignContent = "flex-start",
  gap = 0,
}: Omit<Props, "children">) => {
  return css`
    display: flex;
    flex-flow: ${flexFlow};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    gap: ${gap}px;
  `;
};

export default FlexBox;
