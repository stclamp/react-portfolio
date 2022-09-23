import './Modal.scss';

const Modal = ({active, setActive, cert}) => {
    return (
        <div onClick={() => setActive(false)} className={active ? 'modal active' : 'modal'}>
            <div onClick={(e) => e.stopPropagation()} className="modal_content">
                <img src={cert} alt="Certificate"/>
            </div>
        </div>
    );
};

export default Modal;