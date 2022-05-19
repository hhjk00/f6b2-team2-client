import styled from "@emotion/styled";

// 전체
export const Wrapper = styled.ul`
  width: 90rem;
  height: 130px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
`;

// 각 타입
export const VeganType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const VeganTypeImg = styled.img`
  height: 3.3rem;
  margin-bottom: 15px;
  :hover {
    filter: invert(67%) sepia(61%) saturate(4393%) hue-rotate(132deg)
      brightness(95%) contrast(88%);
  }
`;

export const VeganTypeName = styled.li`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
`;

export const VeganTypeEnName = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #c4c4c4;
`;
