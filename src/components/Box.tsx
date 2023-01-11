import styled from "styled-components";
import Container, { propsType } from "./Container";

type BoxProps = propsType & {};

const Box = styled(Container)<BoxProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.color || "#ffffff"};
`;

export default Box;
