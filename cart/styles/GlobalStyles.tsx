import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
const globalCSS = css`
  ${emotionReset};

  @font-face {
    font-family: "Lato";
    src: url(//fonts.googleapis.com/css?family=Lato);
  }

  body {
    font-family: "Lato", "Lato", "sans-serif";
  }

  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }
  ul {
    list-style: none;
  }
  button,
  input,
  select {
    margin: 0;
  }
  html,
  div {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  iframe {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }
  a {
    color: black;
    text-decoration: none;
  }

  // 스크롤 파트
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb {
    width: 10px;
    /* border-radius: 13px; */
    background-clip: padding-box;
    /* border: 1px solid transparent; */
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;
export { globalCSS };
