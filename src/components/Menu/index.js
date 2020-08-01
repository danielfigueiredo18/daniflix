import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
//import Button from './ButtonLink';
//import ButtonLink from './ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <Link href="/">
                <img className="Logo" src={Logo} alt="Daniflix"></img>
            </Link>
            <Link as={Link} className="ButtonLink" to="/cadastro/video">Novo Video</Link>
        </nav>
    );
}

export default Menu;

