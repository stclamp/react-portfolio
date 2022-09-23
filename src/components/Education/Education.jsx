import './Education.scss'
import Modal from "../Modal/Modal";
import {useState} from "react";

const Education = ({education, isActive}) => {
    const [modalActive, setModalActive] = useState(false);
    const [index, setIndex] = useState(0);

    const onClickModal = (i) => {
        setModalActive(true)
        setIndex(i)
    }

    return (
        <div className={isActive ? 'education active' : 'education'}>
            <div className="container">
                <h2 className="education_title">EDUCATION</h2>
                <div className="education_block">
                    <div className="education_info">
                        <div className="education_job">
                            <h4 className="education_job_title">Web-developer 2021</h4>
                            <h5 onClick={() => onClickModal(0)} className="education_place">Udemy</h5>
                        </div>
                        <p className="education_duration">January 2021 - March 2021</p>
                    </div>
                </div>
                <div className="education_block">
                    <div className="education_info">
                        <div className="education_job">
                            <h4 className="education_job_title">RSSchool Course «JavaScript/Front-end. Stage 0»</h4>
                            <h5 onClick={() => onClickModal(1)} className="education_place">Rolling Scopes School</h5>
                        </div>
                        <p className="education_duration">June 2022 - September 2022</p>
                    </div>
                </div>
                <Modal active={modalActive} setActive={setModalActive} cert={education[index].cert}/>
            </div>
        </div>
    );
};

export default Education;