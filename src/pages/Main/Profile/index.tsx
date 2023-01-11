import Container from "@components/Container";
import Box from "@components/Box";
import { ProTypo, MenuBtn } from "./style";
import { useState } from "react";

type profileProps = {
  user: {
    name: string;
    email: string;
    posts: number;
  };
};

type profileMenuProps = { clicked: boolean; setClicked: React.Dispatch<React.SetStateAction<boolean>> };

function Profile({ user }: profileProps) {
  const [clicked, setClicked] = useState(false);
  return (
    <Container margin="20px" direction="row" alginItems="center">
      <Box width={clicked ? "340px" : "200px"} height="300px" color="#d9d9d9" alginItems="flex-start">
        <Container margin="0 0 0 10px" color="#d9d9d9">
          <Box width="180px" height="180px" margin="0 0 10px 0"></Box>
          <Box width="180px" height="90px" alginItems="flex-start" justifyContent="flex-start">
            <ProTypo>{user.name}</ProTypo>
            <ProTypo>{user.email}</ProTypo>
            <ProTypo>게시글 : {user.posts}</ProTypo>
          </Box>
        </Container>
      </Box>
      <ProfileMenu clicked={clicked} setClicked={setClicked} />
    </Container>
  );
}

function ProfileMenu({ clicked, setClicked }: profileMenuProps) {
  const onClick = () => setClicked(!clicked);

  if (clicked)
    return (
      <MenuBtn onClick={onClick} open={clicked}>
        <ProTypo>{"<"}</ProTypo>
      </MenuBtn>
    );
  return (
    <MenuBtn onClick={onClick} open={clicked}>
      <ProTypo>{">"}</ProTypo>
    </MenuBtn>
  );
}

export default Profile;
