import { Link } from 'react-scroll'

const Menu = ({ onMenuClick }) => {

    const { innerWidth: width } = window;


    return (
        <nav className='menu'>
            <ul className="menu_list">
                {/* {menu.map(item => (
                    <li key={item.name} className="menu_item"></li>
                ))} */}
                <li className="menu_item" >
                    <Link to='about' spy={true} smooth={true} offset={0}
                        duration={500}
                        className="menu_link" onClick={width < 1920 ? onMenuClick : null}>About</Link>
                </li>
                <li className="menu_item">
                    <Link to='skills' spy={true} smooth={true} offset={0}
                        duration={500}
                        className="menu_link" onClick={width < 1920 ? onMenuClick : null}>skills</Link>
                </li>
                <li className="menu_item">
                    <Link to='experience' spy={true} smooth={true} offset={0}
                        duration={500}
                        className="menu_link" onClick={width < 1920 ? onMenuClick : null}>Experience</Link>
                </li>
                <li className="menu_item">
                    <Link to='education' spy={true} smooth={true} offset={0}
                        duration={500}
                        className="menu_link" onClick={width < 1920 ? onMenuClick : null}>Education</Link>
                </li>

                <li className="menu_item">
                    <Link to='portfolio' spy={true} smooth={true} offset={0}
                        duration={500}
                        className="menu_link" onClick={width < 1920 ? onMenuClick : null}>portfolio</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;