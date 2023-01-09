import styled from "styled-components";
import fonts from "@assets/fonts/fonts";

type propsType = {
  width?: string;
  height?: string;
  placeholder?: string;
  margin?: string;
  color?: string;
  size?: number;
};

const Typography = styled.p<propsType>`
  ${fonts}
  margin: ${(props) => props.margin};

  font-family: InterBold;
  font-size: ${(props) => (props.size || 2) * 16}px;
  font-weight: bold;
  color: ${(props) => props.color || "#7c7c7e"};
`;

export default Typography;
