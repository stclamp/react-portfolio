import './Education.scss'
const Education = ({ education, isActive }) => {
    return (
        <div className={isActive ? 'education active' : 'education'}>
            <div className="container">
                <h2 className="education_title">EDUCATION</h2>
                <div className="education_block">
                    <div className="education_info">
                        <div className="education_job">
                            <h4 className="education_job_title">Web-developer 2021</h4>
                            <a href={education[0].cert} target="_blank" rel="noreferrer" className="education_place">Udemy</a>
                        </div>
                        <p className="education_duration">January 2021 - March 2021</p>
                    </div>
                </div>
                <div className="education_block">
                    <div className="education_info">
                        <div className="education_job">
                            <h4 className="education_job_title">RSSchool Course «JavaScript/Front-end. Stage 0»</h4>
                            <a href={education[1].cert} target="_blank" rel="noreferrer" className="education_place">Rolling Scopes School</a>
                        </div>
                        <p className="education_duration">June 2022 - September 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;