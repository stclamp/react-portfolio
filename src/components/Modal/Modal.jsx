import './Modal.scss';

const Modal = ({active, setActive, cert}) => {
    return (
        <div onClick={() => setActive(false)} className={active ? 'modal active' : 'modal'}>
            <div onClick={(e) => e.stopPropagation()} className="modal_content">
                {active && <svg onClick={() => setActive(false)} className='modal_close' width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.24219 4.5708L44.2422 44.5708M4.24219 44.5708L44.2422 4.5708" stroke="#7D3780" strokeWidth="7.18322" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                <img className='modal_img' src={cert} alt="Certificate"/>
            </div>
        </div>
    );
};

export default Modal;