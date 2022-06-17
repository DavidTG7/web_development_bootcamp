import React from "react";
import {
  HeaderWrapper,
  Image,
  Name,
  Link } from "./Header.styled";


function Header({text, src}) {
  return (
    <>
      <HeaderWrapper>
        <Image src={src} alt="foto" />
        <Name>{text}</Name>
        <Link href="www.google.com">Home</Link>
        <Link href="www.google.com">Contact</Link>
        <Link href="www.google.com">About</Link>
      </HeaderWrapper>
    </>

  );
}

export { Header };
