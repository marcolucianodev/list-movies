import { FooterContainer } from "./styles";

const Footer = () => {
    return (
        <FooterContainer>
            <p>Desenvolvido por <a href="https://www.marcoluciano.dev">Marco Luciano</a></p><br/>
            <p>
                <a href="https://www.linkedin.com/in/marcolucianodev/" target="_blank" rel="noreferrer">Linkedin</a>
                <a href="https://github.com/marcolucianodev" target="_blank" rel="noreferrer">Github</a>
            </p>
        </FooterContainer>
    );
}

export default Footer;