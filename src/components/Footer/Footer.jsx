import './Footer.scss';

const Footer = ({isActive}) => {
    return (
        <footer className={isActive ? 'footer active' : 'footer'}>
            <div className="container">
                <p className="designed">Developed & Designed by Pavel Evtushenko</p>
                <p className="based">based on React</p>
            </div>
        </footer>
    );
};

export default Footer;