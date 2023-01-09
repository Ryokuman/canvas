import { css } from "styled-components";
import Glory from "./Glory.ttf";
import Inter from "./Inter.ttf";

const fonts = css`
  @font-face {
    font-family: "Glory";
    src: url(${Glory}) format("truetype");
  }
  @font-face {
    font-family: "Inter";
    src: url(${Inter}) format("truetype");
  }
`;
export default fonts;
