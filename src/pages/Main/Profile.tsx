import Container from "@components/Container";
import Box from "@components/Box";
import Typography from "@components/Typography";

type profileProps = {
  user: {
    name: string;
    email: string;
    posts: number;
  };
};

function Profile({ user }: profileProps) {
  return (
    <Box width="200px" height="300px" margin="20px" color="#d9d9d9">
      <Box width="180px" height="180px" margin="0 0 10px 0"></Box>
      <Box width="180px" height="90px" alginItems="flex-start" justifyContent="flex-start">
        <Typography size={1.2} margin="4px">
          {user.name}
        </Typography>
        <Typography size={1.2} margin="4px">
          {user.email}
        </Typography>
        <Typography size={1.2} margin="4px">
          게시글 : {user.posts}
        </Typography>
      </Box>
    </Box>
  );
}

export default Profile;
