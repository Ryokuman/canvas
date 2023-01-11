import Container from "@components/Container";
import Post from "./Post";
import Profile from "./Profile";

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
  return (
    <Container direction="row" width="1000px">
      <Container>
        {postData.map((e, i) => (
          <Post key={i} user={e.user} comments={e.comments} tags={e.tags} />
        ))}
      </Container>
      <Profile user={userData} />
    </Container>
  );
}

export default Main;
