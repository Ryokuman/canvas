import Box from "@components/Box";
import Typography from "@components/Typography";
import styled from "styled-components";

const PostTypo = styled(Typography)`
  font-size: 16px;
  cursor: pointer;
`;

const MenuTypo = styled(PostTypo)`
  cursor: default;
`;

const Body = styled(Box)`
  width: 800px;
  height: 400px;
  flex-direction: row;
  background-color: #d9d9d9;
`;

const Wrapper = styled(Box)`
  margin: 20px;
`;

export { PostTypo, MenuTypo, Body, Wrapper };
