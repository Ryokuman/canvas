import styled from "styled-components";

type propsType = {
  width?: number;
  height?: number;
  color?: string;
};

const Container = styled.div<propsType>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.color || "#F7F8FB"};
`;

export default Container;
