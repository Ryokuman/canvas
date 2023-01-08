import styled from "styled-components";

type propsType = {
  width?: number;
  height?: number;
  placeholder?: string;
};

const TextFiled = styled.input.attrs((props: propsType) => ({ placeholder: props.placeholder }))<propsType>`
  width: ${(props) => props.width || "800px"};
  height: ${(props) => props.height || "80px"};
  background-color: "#FFFFFF";
`;

export default TextFiled;
