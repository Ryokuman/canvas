import styled, { css } from "styled-components";
import logo_1 from "@assets/images/logo_1.png";
import logo_2 from "@assets/images/logo_2.png";

type propsType = {
  width?: number;
  margin?: string;
  type: number;
};

const Logo = styled.div<propsType>`
  ${(props: propsType) => {
    let type;
    let width;
    let height;

    if (props.type === 1) {
      type = logo_1;
      width = props.width || 100;
      height = width * 1.34;
    }
    if (props.type === 2) {
      type = logo_2;
      width = props.width || 100;
      height = width * 0.53;
    }

    return css`
      width: ${width + "px"};
      height: ${height + "px"};
      background-image: url(${type});
      background-size: cover;
      background-repeat: no-repeat;
    `;
  }}
  margin:${(props) => props.margin}
`;

export default Logo;
