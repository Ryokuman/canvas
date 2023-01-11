import styled from "styled-components";

type propsType = {
  width?: string;
  height?: string;
  color?: string;
  direction?: string;
  alginItems?: string;
  justifyContent?: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
};

const Container = styled.div<propsType>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.color || "#F7F8FB"};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.alginItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
`;

export default Container;
export { type propsType };
