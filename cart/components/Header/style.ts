import { css } from "@emotion/react";

export const wrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  background-color: #2ac1bc;
`;

export const headerText = css`
  font-size: 20px;
  font-weight: 900;
`;

export const circle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: aliceblue;
`;

export const cartCountText = css`
  padding-top: 3px;
  font-weight: 900;
`;
