const Menu = ({menu}) => {
    return (
        <nav className='menu'>
            <ul className="menu_list">
                {menu.map(item => (
                    <li key={item} className="menu_item"><a href="#s" className="menu_link">{item}</a></li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;