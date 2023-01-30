import { useState } from "react";
import { Body, Menu } from "./style";
import Container from "@components/Container";

function Controller() {
  const [clicked, setClikced] = useState<"detail" | "list">("detail");
  const onClick = (e: any) => setClikced(e.target.role);
  console.log(clicked);

  return (
    <Container margin="20px">
      <Container direction="row">
        <Menu role="detail" clicked={clicked} onClick={onClick} />
        <Menu role="list" clicked={clicked} onClick={onClick} />
      </Container>
      <Body></Body>
    </Container>
  );
}

export default Controller;
