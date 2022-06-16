import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 120px;
  border-bottom: solid 1px gray;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 80px;

  &:hover {
    animation: spin 1.8s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    } 
  }
  }
`;

export const Name = styled.h1`
  color: blue;
  text-align: left;
`;

export const Link = styled.a`
  text-decoration: none;
  &:hover {
    color: pink;
  }
`;
