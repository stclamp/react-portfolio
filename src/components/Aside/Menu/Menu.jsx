import {Link} from 'react-scroll'

const Menu = ({menu}) => {

    return (
        <nav className='menu'>
            <ul className="menu_list">
                {menu.map(item => (
                    <li key={item.name} className="menu_item"></li>
                ))}
                <li className="menu_item">
                    <Link to='about' spy={true} smooth={true} offset={0}
                          duration={500}
                          className="menu_link">About</Link>
                </li>
                <li className="menu_item">
                    <Link to='experience' spy={true} smooth={true} offset={0}
                          duration={500}
                          className="menu_link">Experience</Link>
                </li>
                <li className="menu_item">
                    <Link to='education' spy={true} smooth={true} offset={0}
                          duration={500}
                          className="menu_link">Education</Link>
                </li>
                <li className="menu_item">
                    <Link to='skills' spy={true} smooth={true} offset={0}
                          duration={500}
                          className="menu_link">skills</Link>
                </li>
                <li className="menu_item">
                    <Link to='portfolio' spy={true} smooth={true} offset={0}
                          duration={500}
                          className="menu_link">portfolio</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;