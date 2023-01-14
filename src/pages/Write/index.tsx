import Container from "@components/Container";
import Controller from "./Controller";
import Profile from "@pages/Main/Profile";
import { useState } from "react";
import Canvas from "./Canvas";

const userData = {
  name: "user",
  email: "email@email.com",
  posts: 100,
};

function Write() {
  const [state, setState] = useState<"home" | "search" | "write">("home");

  return (
    <Container direction="row">
      <Canvas />
      <Container>
        <Profile state={state} setState={setState} user={userData} />
        <Controller />
      </Container>
    </Container>
  );
}

export default Write;
