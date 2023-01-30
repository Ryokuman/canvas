import styled, { css } from "styled-components";
import home from "@assets/images/home.png";
import search from "@assets/images/search.png";
// import write from "@assets/images/write.png";
import logout from "@assets/images/logout.png";

type PropsType = {
  width?: string;
  height?: string;
  margin?: string;
  type: string;
};

const Pictogram = styled.div<PropsType>`
  width: ${(props) => props.width || "64px"};
  height: ${(props) => props.height || "64px"};
  margin: ${(props) => props.margin || "4px"};
  cursor: pointer;

  ${(props) => {
    let url;
    if (props.type === "home") url = home;
    if (props.type === "search") url = search;
    // if (props.type === "write") url = write;
    if (props.type === "logout") url = logout;

    return css`
      background-image: url(${url});
      background-size: cover;
      background-repeat: no-repeat;
    `;
  }}
`;

export default Pictogram;
