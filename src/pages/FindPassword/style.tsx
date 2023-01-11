import styled from "styled-components";
import TextField from "@components/TextField";
import Button from "@components/Button";
import Container from "@components/Container";
import { Link } from "react-router-dom";
import Typography from "@components/Typography";
import fonts from "@assets/fonts/fonts";

const FPTextField = styled(TextField)`
  width: ${(props) => props.width || "490px"};
  height: ${(props) => props.height || "30px"};
  margin: ${(props) => props.margin || "20px auto 10px auto"};
`;

const FPButton = styled(Button)`
  width: ${(props) => props.width || "508px"};
  height: ${(props) => props.height || "48px"};
  margin: ${(props) => props.margin || "10px"};
`;

const FPContainer = styled(Container)`
  margin: ${(props) => props.margin || "10px"};
`;

const FPLink = styled(Link)`
  ${fonts}
  font-family: InterBold;
  color: #d33e3e;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
`;

const FPTypo = styled(Typography)`
  font-size: ${(props) => props.size || 18}px;
`;

export { FPTextField, FPButton, FPContainer, FPTypo, FPLink };
