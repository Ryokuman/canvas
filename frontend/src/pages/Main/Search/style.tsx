import Container from "@components/Container";
import TextField from "@components/TextField";
import styled from "styled-components";
import search from "@assets/images/search_logo.png";

const Wrapper = styled(Container)`
  width: 900px;
  height: 800px;
  left: 400px;
  border-radius: 0 0 25px 25px;
  background-color: #e9e8e8;
  z-index: 9;
  align-items: center;

  position: absolute;
`;

const Body = styled(Container)`
  width: 900px;
  height: 780px;
  background-color: #e9e8e8;
  z-index: 10;
  align-items: center;

  position: absolute;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const SearchInput = styled(TextField)`
  width: 500px;
  height: 24px;
  border-radius: 30px;
  padding: 8px 50px 8px 20px;

  font-size: 18px;
  &::placeholder {
    font-size: 18px;
  }
`;

const SearchLogo = styled.div`
  background-image: url(${search});
  background-size: cover;
  background-repeat: no-repeat;

  width: 24px;
  height: 24px;
`;

const SubmitButton = styled.button.attrs({ type: "submit" })`
  cursor: pointer;
  position: relative;
  top: 8px;
  left: -44px;
  border: 0 solid;
  background-color: #ffffff;
`;

function SearchBar() {
  return (
    <Container margin="20px" direction="row" color="#e9e8e8">
      <SearchInput placeholder="검색어를 입력해 주세요" />
      <SubmitButton>
        <SearchLogo />
      </SubmitButton>
    </Container>
  );
}

export { Body, SearchInput, Wrapper, SearchBar };
