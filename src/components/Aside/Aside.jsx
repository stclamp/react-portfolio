import './Aside.scss';
import Avatar from "./Avatar/Avatar";
import Menu from "./Menu/Menu";
import menuIcon from '../../assets/img/menu.svg';
import menuClose from '../../assets/img/close.svg'

const Aside = ({ avatar, menu, onMenuClick, isActive }) => {
    return (
        <>
            {!isActive && <img onClick={onMenuClick} className='burger_menu' src={menuIcon} alt="Menu" />}
            {isActive && <img onClick={onMenuClick} className='burger_menu close' src={menuClose} alt="Close" />}
            <aside className={isActive ? 'profile active' : 'profile'}>
                <Avatar avatar={avatar} />
                <Menu menu={menu} onMenuClick={onMenuClick} />
            </aside>
        </>
    );
};

export default Aside;