import Container from "@components/Container";
import { SignUpTextField, SignUpButton, SignUpContainer, SignUpTypo, SignUpLink } from "./style";
import Logo from "@components/Logo";

function SignUp() {
  return (
    <Container>
      <Logo margin="-66px 0 0 0" type={2} width={210} />
      <SignUpTextField placeholder="E MAIL" />
      <SignUpTextField placeholder="PASSWORD" />
      <SignUpTextField placeholder="CONFIRM PASSWORD" />
      <SignUpButton>회원가입</SignUpButton>
      <SignUpContainer>
        <SignUpContainer margin="0" direction="row">
          <SignUpTypo margin="0 4px">계정이 이미 있으신가요?</SignUpTypo>
          <SignUpLink to="../login">로그인</SignUpLink>
        </SignUpContainer>
        <SignUpContainer direction="row">
          <SignUpTypo margin="0 4px 0 -10px">비밀번호가 기억나지 않으시나요? </SignUpTypo>
          <SignUpLink to="../findpassword">비밀번호 찾기</SignUpLink>
        </SignUpContainer>
      </SignUpContainer>
    </Container>
  );
}

export default SignUp;
