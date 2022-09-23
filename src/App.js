import './App.scss';
import udemy from './assets/img/Udemy.jpg';
import rs from './assets/img/RSPreSchool.jpg';
import avatar from './assets/img/avatar.png'
import Aside from "./components/Aside/Aside";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";

function App() {

    const menu = ['About', 'Experience', 'Education', 'Skills', 'Portfolio'];

    const education = [
        {
            id: 1,
            title: 'Web-developer 2021',
            place: 'Udemy',
            duration: 'January 2021 - March 2021',
            cert: udemy
        },
        {
            id: 2,
            title: 'RSSchool Course «JavaScript/Front-end. Stage 0»',
            place: 'Rolling Scopes School',
            duration: 'June 2022 - September 2022',
            cert: rs
        },

    ];

    const experience = [
        {
            title: 'Front-End Teacher',
            place: 'IT START',
            descr: 'Taught Front-End: HTML, CSS, JS, React.js to children from 12 to 18 years old. Answered questions, checked homework, graded',
            duration: 'March 2021 - February 2022'
        }
    ]
    return (<div className="App">
        <Aside avatar={avatar} menu={menu}/>
        <About/>
        <Experience experience={experience}/>
        <Education education={education}/>
        <Footer/>
    </div>);
}

export default App;
