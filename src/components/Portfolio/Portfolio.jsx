import './Portfolio.scss'
import Work from "./Work/Work";

const Portfolio = ({portfolio, isActive}) => {
    return (
        <div className={isActive ? 'portfolio active' : 'portfolio'}>
            <div className="container">
                <h2 className="portfolio_title">PORTFOLIO</h2>
                <div className="portfolio_block">
                    {portfolio.map((item, i) => <Work key={i} {...item}/>)}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;