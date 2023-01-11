import Post from "./Post";

const postData = [
  { user: "ryo_ku_man", comments: 100, tags: ["tag1", "tag2"] },
  { user: "ㅁㄴㅇㅁㄴㅇ", comments: 100, tags: ["tag1", "tag2"] },
  { user: "username", comments: 100, tags: ["tag1", "tag2"] },
];

function Main() {
  return (
    <div>
      {postData.map((e) => (
        <Post user={e.user} comments={e.comments} tags={e.tags} />
      ))}
    </div>
  );
}

export default Main;
