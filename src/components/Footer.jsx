import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <footer>
            <p>Copyright &copy; {year} ~ Ketan Shah</p>
        </footer>
    );
}

export default Footer;