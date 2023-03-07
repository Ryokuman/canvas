import Container from "@components/Container";
import { LoginTextField, LoginButton, LoginContainer, LoginTypo, LoginLink, CustomForm } from "./style";
import Logo from "@components/Logo";
import { useState } from "react";
import api from "@utils/api";
import { useNavigate } from "react-router-dom";

type onSubmit = React.FormEventHandler<HTMLFormElement>;
type onChange = React.ChangeEventHandler<HTMLInputElement>;

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const onEmailChange: onChange = (e) => setEmail(e.target.value);
  const onPwChange: onChange = (e) => setPw(e.target.value);

  const onSubmit: onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      req: "login",
      email: email,
      password: pw,
    };
    await api
      .post("user/", data)
      .then((res) => {
        window.alert(res.data.result);
        navigate("../main");
      })
      .catch((res) => window.alert(res.response.data.result));
  };

  return (
    <Container width="100%" height="100%" alginItems="center" justifyContent="center">
      <CustomForm onSubmit={onSubmit}>
        <Logo type={2} width={210} />
        <LoginTextField placeholder="E MAIL" onChange={onEmailChange} value={email} />
        <LoginTextField placeholder="PASSWORD" type="password" value={pw} onChange={onPwChange} />
        <LoginButton>로그인</LoginButton>
      </CustomForm>
      <LoginContainer>
        <LoginContainer direction="row">
          <LoginTypo margin="0 4px 0 0">계정이 없으신가요?</LoginTypo>
          <LoginLink to="../signup">회원가입</LoginLink>
        </LoginContainer>
        <LoginContainer direction="row">
          <LoginTypo margin="0 4px 0 0">비밀번호가 기억나지 않으시나요? </LoginTypo>
          <LoginLink to="../findpassword">비밀번호 찾기</LoginLink>
        </LoginContainer>
      </LoginContainer>
    </Container>
  );
}

export default Login;
