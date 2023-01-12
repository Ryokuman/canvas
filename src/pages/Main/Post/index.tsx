import Box from "@components/Box";
import { PostTypo, MenuTypo, Body, Wrapper } from "./style";

type PostProps = {
  user: string;
  comments: number;
  tags: string[];
};

function Post({ user, comments, tags }: PostProps) {
  return (
    <Wrapper>
      <Body>
        <Box width="650px" height="350px"></Box>
        <Box margin="0 0 0 10px" color="#d9d9d9">
          <Box width="100px" height="140px" color="#ffffff">
            <Box width="80px" height="80px" color="#d9d9d9"></Box>
            <PostTypo margin="14px 0 0 0">{user}</PostTypo>
          </Box>
          <Box margin="16px 0" width="100px" height="30px" direction="row">
            <MenuTypo margin="0 10px 0 0">댓글</MenuTypo>
            <MenuTypo>{comments}</MenuTypo>
          </Box>
          <Box color="#d9d9d9">
            <Box width="100px" height="20px" color="#e9e8e8" alginItems="flex-start">
              <MenuTypo>TAGS</MenuTypo>
            </Box>
            <Box width="100px" height="128px" color="#ffffff" alginItems="flex-start" justifyContent="flex-start">
              {tags.map((e, i) => {
                return (
                  <PostTypo margin={i === 0 ? "6px 8px 2px" : "2px 8px"} key={i}>
                    {e}
                  </PostTypo>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Body>
    </Wrapper>
  );
}

export default Post;
