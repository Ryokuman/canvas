import styled from "styled-components";
import Typography from "@components/Typography";
import Box from "@components/Box";

type MenuBtnProps = { open?: boolean };

const ProTypo = styled(Typography)`
  margin: 4px;
  font-size: 18px;
  cursor: "pointer";
`;

const MenuBtn = styled(Box)<MenuBtnProps>`
  width: 20px;
  height: 100px;
  margin: ${(props) => (props.open ? "-26px" : "-3px")};
  border: 3px solid #d9d9d9;
  border-radius: ${(props) => (props.open ? "15px 0 0 15px" : "0 15px 15px 0")};
  cursor: pointer;
`;

export { ProTypo, MenuBtn };
