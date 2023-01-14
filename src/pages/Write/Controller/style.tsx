import styled from "styled-components";
import Container, { propsType } from "@components/Container";
import Typography from "@components/Typography";

type menuProps = propsType & { role?: string; clicked?: string };

const Body = styled(Container)`
  width: 400px;
  height: 450px;
  background-color: #d9d9d9;
  border-radius: 0 15px 15px 15px;
`;

const MenuBtn = styled(Container)<menuProps>`
  width: 80px;
  height: 30px;
  border-radius: 15px 15px 0 0;
  background-color: ${(props) => (props.role === props.clicked ? "#d9d9d9" : "#838383")};
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

function Menu({ clicked, onClick, role }: menuProps & { onClick: any }) {
  return (
    <MenuBtn role={role} clicked={clicked} onClick={onClick}>
      <Typography role={role} size={1.2} color="black">
        {role?.toUpperCase()}
      </Typography>
    </MenuBtn>
  );
}

export { Body, Menu };
