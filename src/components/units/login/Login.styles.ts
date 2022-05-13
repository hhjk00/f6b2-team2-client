import styled from "@emotion/styled";

// 컴포넌트 전체
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #e5e5e5;
`;

// 내용 전체
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.0625rem auto;
`;

// 제목 부분
export const HeaderWrapper = styled.div`
  margin-bottom: 2.1875rem;
`;
export const HeaderTitle = styled.h1`
  font-size: 3.125rem;
`;

// 제목 외 내용 부분
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.75rem;
  height: 40.75rem;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

// 회원 로그인 선택 부분
export const BodyTitle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.25rem;
  margin-bottom: 17px;
`;

export const LoginTitle = styled.li`
  margin-bottom: 17px;
`;

export const LoginTitleUnderBar = styled.li`
  border-bottom: 4px solid #0fbaa3;
  width: 29rem;
`;

// 아이디 비밀번호 인풋
export const BodyContents = styled.ul`
  width: 29rem;
  display: flex;
  flex-direction: column;
`;

export const BodyContentsInput = styled.input`
  width: 100%;
  height: 3.875rem;
  border: 1px solid #bfbfbf;
  margin-bottom: 10px;
  padding: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

// 로그인 회원가입 버튼
export const BodyContentsLoginButton = styled.button`
  width: 100%;
  height: 3.875rem;
  margin-bottom: 0.625rem;
  background-color: #0fbaa3;
  border: 1px solid #0fbaa3;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
`;

export const BodyContentsSignUpButton = styled.button`
  width: 100%;
  height: 3.875rem;
  margin-bottom: 1.875rem;
  background-color: white;
  border: 1px solid #0fbaa3;
  color: #0fbaa3;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
`;

// 소셜 로그인 부분
export const SNSLoginWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SNSIcon = styled.img`
  width: 60px;
  height: auto;
  margin-right: 2.75rem;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`;
