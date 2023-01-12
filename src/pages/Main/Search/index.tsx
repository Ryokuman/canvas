import { Body, SearchBar, Wrapper } from "./style";
import Post from "../Post";

const SearchData = [
  { user: "ryo_ku_man", comments: 100, tags: ["tag1", "tag2"] },
  { user: "ㅁㄴㅇㅁㄴㅇ", comments: 100, tags: ["tag1", "tag2"] },
  { user: "username", comments: 100, tags: ["tag1", "tag2"] },
];

function Search() {
  // redux 활용하여 검색어 제어
  return (
    <Wrapper>
      <Body>
        <form>
          <SearchBar />
        </form>
        {SearchData.map((e, i) => (
          <Post key={i} user={e.user} comments={e.comments} tags={e.tags} />
        ))}
      </Body>
    </Wrapper>
  );
}

export default Search;
