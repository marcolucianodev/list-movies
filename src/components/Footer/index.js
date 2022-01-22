import React from "react";
import { FooterContainer } from "./styles";

const Footer = () => {
    return (
        <FooterContainer>
            <p>Desenvolvido por Marco Luciano</p><br/>
            <p>
                <a href="https://www.linkedin.com/in/marcolucianodev/" target="_blank">Linkedin</a>
                <a href="https://github.com/marcolucianodev" target="_blank">Github</a>
            </p>
        </FooterContainer>
    );
}

export default Footer;