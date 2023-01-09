import styled from "styled-components";

type propsType = {
  width?: number;
  height?: number;
  color?: string;
};

const Container = styled.div<propsType>`
  width: ${(props) => props.width || "100vw"};
  height: ${(props) => props.height || "100vh"};
  background-color: ${(props) => props.color || "#F7F8FB"};
`;

export default Container;
