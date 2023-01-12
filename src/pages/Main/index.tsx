import Container from "@components/Container";
import Post from "./Post";
import Profile from "./Profile";
import Search from "./Search";
import { useState } from "react";

const postData = [
  { user: "ryo_ku_man", comments: 100, tags: ["tag1", "tag2"] },
  { user: "ㅁㄴㅇㅁㄴㅇ", comments: 100, tags: ["tag1", "tag2"] },
  { user: "username", comments: 100, tags: ["tag1", "tag2"] },
];

const userData = {
  name: "user",
  email: "email@email.com",
  posts: 100,
};

function Main() {
  const [state, setState] = useState<"home" | "search" | "write">("home");

  return (
    <Container direction="row" width="1000px" margin="0 0 0 300px">
      {state === "search" && <Search />}
      <Container>
        {postData.map((e, i) => (
          <Post key={i} user={e.user} comments={e.comments} tags={e.tags} />
        ))}
      </Container>
      <Profile state={state} setState={setState} user={userData} />
    </Container>
  );
}

export default Main;
