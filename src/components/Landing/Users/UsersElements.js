import styled from "styled-components";

export const UsersContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  //   @media screen and (max-width: 768px) {
  //     height: 1100px;
  //   }
  //   @media screen and (max-width: 768px) {
  //     height: 1300px;
  //   }
`;

export const UserWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-gap: 32px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 968px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Usercard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const UserIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const UserH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const UserH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const UserP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
