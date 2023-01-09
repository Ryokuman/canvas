import styled from "styled-components";
import fonts from "../assets/fonts/fonts";

type propsType = {
  width?: number;
  height?: number;
  placeholder?: string;
};

const TextField = styled.input.attrs((props: propsType) => ({ placeholder: props.placeholder }))<propsType>`
  ${fonts}
  width: ${(props) => props.width || "800px"};
  height: ${(props) => props.height || "80px"};
  background-color: "#FFFFFF";
  font-family: Inter;
`;

export default TextField;
