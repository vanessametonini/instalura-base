import React from "react";
import { Logo } from "../../../theme/Logo";
import { MenuWrapper } from "./styles/MenuWrapper";
import { Button } from "../Button";

const links  = [
  {
    texto: 'Home',
    url: '/home'
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq'
  },
  {
    texto: 'Sobre',
    url: '/sobre'
  },
]
export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => {
          return <li key={link.url}>
            <a href={link.url}>
              {link.texto}
            </a>
          </li>
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">Entrar</Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide> 
    </MenuWrapper>
  )
}

