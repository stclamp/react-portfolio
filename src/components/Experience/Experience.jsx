import './Experience.scss'

const Experience = ({experience, isActive}) => {
    return (
        <div className={isActive ? 'experience active' : 'experience'}>
            <div className="container">
                <h2 className="experience_title">EXPERIENCE</h2>
                {experience.map((item, i) => (
                    <div key={i} className="experience_block">
                        <div className="experience_info">
                            <div className="experience_job">
                                <h4 className="experience_job_title">{item.title}</h4>
                                <h5 className="experience_place">{item.place}</h5>
                            </div>
                            <p className="experience_duration">{item.duration}</p>
                        </div>
                        <p className="experience_descr">{item.descr}</p>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Experience;