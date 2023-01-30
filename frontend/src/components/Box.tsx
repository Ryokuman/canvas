import styled from "styled-components";
import Container, { propsType } from "./Container";

type BoxProps = propsType & {};

const Box = styled(Container)<BoxProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.color || "#ffffff"};

  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.alginItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
`;

export default Box;
