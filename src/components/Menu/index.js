import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
import Button from './ButtonLink';
//import ButtonLink from './ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <img className="Logo" src={Logo} alt="Daniflix"></img>
            <Button className="ButtonLink" href="/">Novo Video</Button>
        </nav>
    );
}

export default Menu;