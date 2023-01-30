import styled from "styled-components";
import fonts from "@assets/fonts/fonts";

type propsType = {
  width?: string;
  height?: string;
  color?: string;
  margin?: string;
};

const Button = styled.button<propsType>`
  ${fonts}
  width: ${(props) => props.width || "400px"};
  height: ${(props) => props.height || "80"};
  background-color: ${(props) => props.color || "#c3b091"};

  border-radius: 10px;
  border: 0px solid;

  margin: ${(props) => props.margin};

  font-family: GloryBold;
  font-size: 32px;
  font-weight: bold;
`;

export default Button;
