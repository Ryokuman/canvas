import Container from "@components/Container";
import { SignUpTextField, SignUpButton, SignUpContainer, SignUpTypo, SignUpLink, CustomForm } from "./style";
import { useState } from "react";
import Logo from "@components/Logo";
import api from "@utils/api";
import { useNavigate } from "react-router-dom";

type onSubmit = React.FormEventHandler<HTMLFormElement>;
type onChange = React.ChangeEventHandler<HTMLInputElement>;

function SignUp() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [conPw, setConPw] = useState("");
  const navigate = useNavigate();

  const onEmailChange: onChange = (e) => setEmail(e.target.value);
  const onPwChange: onChange = (e) => setPw(e.target.value);
  const onConPwChange: onChange = (e) => setConPw(e.target.value);

  const onSubmit: onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      req: "new",
      email: email,
      password: pw,
    };

    await api
      .post("user/", data)
      .then((res) => {
        window.alert(res.data.result);
        navigate("../login");
      })
      .catch((res) => window.alert(res.response.data.result));
  };

  return (
    <Container width="100%" height="100%" alginItems="center" justifyContent="center">
      <Logo margin="-66px 0 0 0" type={2} width={210} />
      <CustomForm onSubmit={onSubmit}>
        <SignUpTextField placeholder="E MAIL" value={email} onChange={onEmailChange} />
        <SignUpTextField placeholder="PASSWORD" type="password" value={pw} onChange={onPwChange} />
        <SignUpTextField placeholder="CONFIRM PASSWORD" type="password" value={conPw} onChange={onConPwChange} />
        <SignUpButton type="submit">회원가입</SignUpButton>
      </CustomForm>
      <SignUpContainer>
        <SignUpContainer direction="row">
          <SignUpTypo margin="0 4px 0 0">계정이 이미 있으신가요?</SignUpTypo>
          <SignUpLink to="../login">로그인</SignUpLink>
        </SignUpContainer>
        <SignUpContainer direction="row">
          <SignUpTypo margin="0 4px 0 0">비밀번호가 기억나지 않으시나요? </SignUpTypo>
          <SignUpLink to="../findpassword">비밀번호 찾기</SignUpLink>
        </SignUpContainer>
      </SignUpContainer>
    </Container>
  );
}

export default SignUp;
