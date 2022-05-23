import styled from "@emotion/styled";

export const Container = styled.div`
  background-image: url("/img/drawer/img-drawer-01.svg");
  background-repeat: no-repeat;
  background-position: bottom;
`;
export const Wrapper = styled.div`
  padding: 2.68rem 1.875rem;
  min-width: 329px;
  height: 100vh;
`;
export const DrawerHead = styled.div`
  margin-bottom: 2.56rem;
  & > div:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      background: #ffffff;
      border: none;
      cursor: pointer;

      img {
        width: 24px;
        height: auto;
      }
    }
  }
  & > div {
    margin-bottom: 1.23rem;
  }
  & > div:nth-of-type(2) > span {
    padding: 0.5rem 1.25rem;
    background: #bfab87;
    border-radius: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: -0.05em;
  }
  & > div:nth-of-type(3) > span {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -0.05em;
  }
`;
export const DrawerBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2.375rem;
`;
export const VeganType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 1.75rem;
  border-right: 1px solid #c4c4c4;

  & > img {
    width: 2.43rem;
    height: auto;
  }
  & > span {
    color: #464646;
    font-weight: 400;
    font-size: 1rem;
  }
`;
export const SubsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 1.75rem;

  & > span:nth-of-type(1) {
    padding-bottom: 1rem;
    color: #0fbaa3;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.05em;
  }

  & > span:nth-of-type(2) {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    color: #464646;
  }
`;
export const RegisterButton = styled.button`
  padding: 1rem 5rem;
  border: 1px solid #0fbaa3;
  border-radius: 2rem;
  background: #ffffff;
  color: #0fbaa3;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.05em;
  cursor: pointer;
`;

export const DrawerNav = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 0;

  & > li {
    padding-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.05em;

    a {
      color: #464646;
    }
  }

  & > li:first-of-type a {
    color: #0fbaa3;
  }
`;