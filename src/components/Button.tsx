import styled from "styled-components";

type propsType = {
  width?: number;
  height?: number;
  color?: string;
};

const Button = styled.button<propsType>`
  width: 400px;
  height: 80px;
  border-radius: 10px;
  background-color: ${(props) => props.color || "#c3b091"};
`;

export default Button;
