import styled from "styled-components";
import fonts from "@assets/fonts/fonts";

type propsType = {
  width?: string;
  height?: string;
  placeholder?: string;
  margin?: string;
};

const TextField = styled.input.attrs((props: propsType) => ({ placeholder: props.placeholder }))<propsType>`
  ${fonts}
  width: ${(props) => props.width || "800px"};
  height: ${(props) => props.height || "80px"};
  background-color: "#FFFFFF";
  padding: 8px 0px 8px 20px;

  border-radius: 10px;
  border: 0px solid;

  margin: ${(props) => props.margin};

  &::placeholder {
    font-family: GloryBold;
    font-size: 32px;
    font-style: bold;
    color: #b3b3b3;
  }

  font-family: GloryBold;
  font-size: 32px;
  font-weight: bold;
`;

export default TextField;
