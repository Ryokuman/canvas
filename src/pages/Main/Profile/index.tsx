import Container from "@components/Container";
import Box from "@components/Box";
import Pictogram from "@components/Pictogram";
import { ProTypo, MenuBtn } from "./style";
import { useState } from "react";

type profileProps = {
  user: {
    name: string;
    email: string;
    posts: number;
  };
};

function Profile({ user }: profileProps) {
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <Container margin="20px" direction="row" alginItems="center">
      <Box
        width={clicked ? "300px" : "200px"}
        height="300px"
        color="#d9d9d9"
        justifyContent="flex-start"
        direction="row"
      >
        <Container margin="0 0 0 10px" color="#d9d9d9">
          <Box width="180px" height="180px" margin="0 0 10px 0"></Box>
          <Box width="180px" height="90px" alginItems="flex-start" justifyContent="flex-start">
            <ProTypo>{user.name}</ProTypo>
            <ProTypo>{user.email}</ProTypo>
            <ProTypo>게시글 : {user.posts}</ProTypo>
          </Box>
        </Container>
        {clicked && (
          <Container color="#d9d9d9" margin="0 0 0 10px">
            <Pictogram type="home" />
            <Pictogram type="search" />
            <Pictogram type="write" />
            <Pictogram type="logout" />
          </Container>
        )}
      </Box>
      <MenuBtn onClick={onClick} open={clicked}>
        <ProTypo>{clicked ? "<" : ">"}</ProTypo>
      </MenuBtn>
    </Container>
  );
}

export default Profile;
