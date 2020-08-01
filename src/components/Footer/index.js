import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import '../../components/Menu/Menu.css';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo Daniflix" />
      </a>
      <p>
        Orgulhosamente criado durante a imersão Alura por
        {' '}
        <a href="https://www.linkedin.com/in/danielfigueiredo18/">
          Daniel Figueiredo
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
