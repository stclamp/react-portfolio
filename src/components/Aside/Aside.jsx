import './Aside.scss';
import Avatar from "./Avatar/Avatar";
import Menu from "./Menu/Menu";

const Aside = ({avatar, menu}) => {
    return (
        <aside className='profile'>
            <Avatar avatar={avatar}/>
            <Menu menu={menu}/>
        </aside>
    );
};

export default Aside;