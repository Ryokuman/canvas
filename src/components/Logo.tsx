import styled from "styled-components";
import logo_2 from "@assets/images/logo_2.png";
import logo_1 from "@assets/images/logo_1.png";

type propsType = {
  width?: number;
  height?: number;
  num?: number;
};

const Logo = styled.image.attrs((props: propsType) => {
  src: props.num === 1 ? logo_1 : logo_2;
})<propsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Logo;
