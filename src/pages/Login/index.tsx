import Container from "@components/Container";
import { LoginTextField, LoginButton, LoginContainer, LoginTypo, LoginLink } from "./style";
import Logo from "@components/Logo";

function Login() {
  return (
    <Container>
      <Logo type={2} width={210} />
      <LoginTextField placeholder="E MAIL" />
      <LoginTextField placeholder="PASSWORD" />
      <LoginButton>로그인</LoginButton>
      <LoginContainer>
        <LoginContainer margin="0" direction="row">
          <LoginTypo margin="0 4px 0 48px">계정이 없으신가요?</LoginTypo>
          <LoginLink to="./">회원가입</LoginLink>
        </LoginContainer>
        <LoginContainer direction="row">
          <LoginTypo margin="0 4px 0 -10px">비밀번호가 기억나지 않으시나요? </LoginTypo>
          <LoginLink to="./">비밀번호 찾기</LoginLink>
        </LoginContainer>
      </LoginContainer>
    </Container>
  );
}

export default Login;
