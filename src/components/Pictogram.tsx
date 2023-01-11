import styled, { css } from "styled-components";
import home from "@assets/images/home.png";
import search from "@assets/images/search.png";
import write from "@assets/images/write.png";
import logout from "@assets/images/logout.png";

type PropsType = {
  width?: string;
  height?: string;
  margin?: string;
  type: string;
};

const Pictogram = styled.div<PropsType>`
  width: ${(props) => props.width || "90px"};
  height: ${(props) => props.height || "90px"};
  margin: ${(props) => props.margin};
  ${(props) => {
    let url;
    if (props.type === "home") url = home;
    if (props.type === "search") url = search;
    if (props.type === "write") url = write;
    if (props.type === "logout") url = logout;

    return css`
      background-image: url(${url});
    `;
  }}
`;

export default Pictogram;
