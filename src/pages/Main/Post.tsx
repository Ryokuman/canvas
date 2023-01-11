import Box from "@components/Box";
import Typography from "@components/Typography";

type PostProps = {
  user: string;
  comments: number;
  tags: string[];
};

function Post({ user, comments, tags }: PostProps) {
  return (
    <Box width="800px" height="400px" margin="20px" direction="row" color="#d9d9d9">
      <Box width="650px" height="350px"></Box>
      <Box margin="0 0 0 10px" color="#d9d9d9">
        <Box width="100px" height="140px" color="#ffffff">
          <Box width="80px" height="80px" color="#d9d9d9"></Box>
          <Typography margin="10px 0 0 0" size={1}>
            {user}
          </Typography>
        </Box>
        <Box margin="16px 0" width="100px" height="30px" direction="row">
          <Typography margin="0 10px 0 0" size={1}>
            댓글
          </Typography>
          <Typography size={1}>{comments}</Typography>
        </Box>
        <Box color="#d9d9d9">
          <Box width="100px" height="20px" color="#e9e8e8" alginItems="flex-start">
            <Typography size={1}>TAGS</Typography>
          </Box>
          <Box width="100px" height="128px" color="#ffffff" alginItems="flex-start" justifyContent="flex-start">
            {tags.map((e, i) => {
              return (
                <Typography margin="2px 8px" size={1} key={i}>
                  {e}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Post;
