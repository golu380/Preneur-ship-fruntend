import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
  padding: 0.5em;
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media screen and (min-width: 968px) {
    padding-top: 32px;
    justify-content: center;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 820px) {
    flex-direction: row;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  &:hover{
    color:blue;
  }

  @media screen and (max width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    &:hover{
      color:blue;
    }
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: blue;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  flex-direction: column;

  @media screen and (min-width: 820px) {
    flex-direction: row;
  }
`;

export const SocialLogo = styled(Link)`
  color: black;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  &:hover{
    color:blue;
  }
`;

export const WebsiteRights = styled.small`
  color: black;
  margin-bottom: 16px;
  &:hover{
    color:blue;
  }
`;


export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: black;
  font-size: 24px;
  &:hover{
    color:blue;
  }
`;
