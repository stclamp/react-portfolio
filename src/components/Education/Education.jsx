import './Education.scss'
import Modal from "../Modal/Modal";
import {useState} from "react";

const Education = ({education}) => {
    const [modalActive, setModalActive] = useState(false);
    const [index, setIndex] = useState(0);

    const onClickModal = (i) => {
        setModalActive(true)
        setIndex(i)
    }

    return (
        <div className='education'>
            <div className="container">
                <h2 className="education_title">EDUCATION</h2>
                {education.map((item,i) => (
                    <div key={item} className="education_block">
                        <div className="education_info">
                            <div className="education_job">
                                <h4 className="education_job_title">{item.title}</h4>
                                <h5 onClick={() => onClickModal(i)} className="education_place">{item.place}</h5>
                            </div>
                            <p className="education_duration">{item.duration}</p>
                        </div>
                        <p className="education_descr">{item.descr}</p>

                    </div>
                ))}
                <Modal active={modalActive} setActive={setModalActive} cert={education[index].cert}/>
            </div>
        </div>
    );
};

export default Education;