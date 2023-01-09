import styled from "styled-components";

type propsType = {
  width?: number;
  height?: number;
  color?: string;
  direction?: string;
  alginItems?: string;
  justifyContent?: string;
  margin?: string;
};

const Container = styled.div<propsType>`
  width: ${(props) => props.width || "100vw"};
  height: ${(props) => props.height || "100vh"};
  background-color: ${(props) => props.color || "#F7F8FB"};

  margin: ${(props) => props.margin};

  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.alginItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
`;

export default Container;
