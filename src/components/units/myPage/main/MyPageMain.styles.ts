import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90rem;
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10.5rem;
  background-color: #faf9f9;
  border-radius: 24px;
  padding: 0 4rem;
`;

export const UserIcon = styled.img``;

export const UserGrade = styled.button`
  width: 6.1875rem;
  height: 1.5rem;
  background-color: #bfab87;
  border: none;
  color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
`;

export const UserName = styled.span`
  font-size: 2rem;
  padding-top: 0.5rem;
  & > span {
    font-weight: 700;
  }
`;

export const UserInfo = styled.ul`
  display: flex;
  align-items: center;
  width: 30%;
  height: 2.5rem;
`;

export const Info = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #c4c4c4;
  padding: 0 2rem;
  &:last-of-type {
    width: 60%;
    border: none;
  }
`;

export const TypeIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Name = styled.span`
  padding-top: 0.4rem;
  color: #4b4b4b;
`;

export const Subscribe = styled.span`
  color: #0fbaa3;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Recipe = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2``;