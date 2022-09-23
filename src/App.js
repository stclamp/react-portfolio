import './App.scss';
import udemy from './assets/img/Udemy.jpg';
import rs from './assets/img/RSPreSchool.jpg';
import avatar from './assets/img/avatar.png';
import insurance from './assets/img/insurance.jpg';
import digitalFlow from './assets/img/digital-flow.jpg';
import domeo from './assets/img/domeo.jpg';
import trafficShark from './assets/img/traffic_shark.jpg';
import lightBoost from './assets/img/light-boost.png';
import restaurants from './assets/img/restaurants_bd.png'
import Aside from "./components/Aside/Aside";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import {useState} from "react";

function App() {
    const menu = [
        {
            name: 'About',
            href: 'about'
        },
        {
            name: 'Experience',
            href: 'experience'
        },
        {
            name: 'Education',
            href: 'education'
        },
        {
            name: 'Skills',
            href: 'skills'
        },
        {
            name: 'Portfolio',
            href: 'portfolio'
        }
    ];

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

    const skills = [
        {
            svg: <svg width="75" height="86" viewBox="0 0 75 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 0L6.82543 76.5469L37.4548 85.0521L68.1639 76.5363L75 0H0.005316H0ZM60.1425 25.0372H24.2186L25.0744 34.6534H59.2919L56.7138 63.4754L37.4548 68.8125L18.2224 63.4754L16.9094 48.7295H26.3343L27.004 56.2247L37.4601 59.0421L37.4814 59.0368L47.9428 56.2141L49.0272 44.041H16.4895L13.9592 15.6496H60.9877L60.1478 25.0372H60.1425Z"
                    fill="#4A2C40"/>
            </svg>,
            name: 'HTML'
        },
        {
            svg: <svg width="75" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M75 0L65 57.5L30.1094 70L0 57.5L3.0625 42.6875H15.875L14.625 49.0312L32.8125 55.9688L53.7656 49.0312L56.7031 33.8594H4.60938L7.10938 21.0469H59.25L60.8906 12.8125H8.79688L11.3438 0H75Z"
                    fill="#4A2C40"/>
            </svg>,
            name: 'CSS'
        },
        {
            svg: <svg width="75" height="54" viewBox="0 0 75 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M46.4774 37.304C47.4468 39.2691 48.951 40.9209 50.817 42.0695C52.6831 43.2181 54.8354 43.8169 57.0265 43.7972C61.4574 43.7972 64.2884 41.5817 64.2884 38.5226C64.2884 34.8573 61.3793 33.5574 56.5047 31.4232L53.8299 30.2764C46.1149 26.9892 40.9872 22.8708 40.9872 14.1653C40.9872 6.14407 47.0992 0.0414517 56.6484 0.0414517C59.7477 -0.183434 62.8445 0.510282 65.5516 2.03587C68.2588 3.56145 70.4561 5.85121 71.869 8.61886L63.5416 13.9653C62.9963 12.5938 62.0466 11.4208 60.8187 10.602C59.5908 9.78318 58.1428 9.35743 56.6671 9.3813C56.0239 9.31658 55.3743 9.38661 54.7596 9.58692C54.145 9.78724 53.5788 10.1134 53.0973 10.5447C52.6157 10.976 52.2293 11.503 51.9627 12.0919C51.6961 12.6808 51.5551 13.3189 51.5488 13.9653C51.5488 17.1744 53.5362 18.4712 58.1108 20.4585L60.7856 21.6022C69.8723 25.4987 75 29.4702 75 38.4008C75 48.0281 67.4381 53.3026 57.2796 53.3026C53.3227 53.5543 49.3774 52.6557 45.9198 50.7151C42.4622 48.7745 39.64 45.8749 37.7937 42.366L46.4774 37.304ZM8.70552 38.2414C10.3866 41.2224 11.9146 43.7409 15.5799 43.7409C19.0922 43.7409 21.3107 42.366 21.3107 37.0227V0.666399H32.0036V37.1727C32.0036 48.2437 25.5104 53.2839 16.0362 53.2839C12.6895 53.465 9.36646 52.6289 6.50414 50.8854C3.64181 49.1419 1.37432 46.5727 0 43.5159L8.70552 38.2414Z"
                    fill="#4A2C40"/>
            </svg>,
            name: 'JS'
        },
        {
            svg: <svg width="75" height="85" viewBox="0 0 75 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M67.461 43.7366C66.9668 43.1717 66.4453 42.6054 65.8965 42.0375C66.2798 41.6346 66.6508 41.232 67.0093 40.8298C73.7784 33.2242 76.6353 25.5969 73.9881 21.0113C71.4498 16.6147 63.899 15.3045 54.4462 17.1425C53.5151 17.3247 52.5891 17.5302 51.6683 17.759C51.492 17.1513 51.3045 16.5471 51.1058 15.9464C47.8991 6.28261 42.7189 -0.00332879 37.4243 1.3225e-06C32.3473 0.00231975 27.4404 5.88919 24.3101 14.996C24.0021 15.8944 23.7172 16.8003 23.4554 17.7137C22.8398 17.5626 22.2215 17.4231 21.6007 17.2951C11.6272 15.2474 3.59418 16.596 0.952144 21.1842C-1.58127 25.584 1.06819 32.7756 7.39532 40.0356C8.02281 40.7539 8.66806 41.4561 9.33108 42.1422C8.54947 42.9474 7.80934 43.752 7.11951 44.5522C0.945737 51.7098 -1.55222 58.7838 0.977099 63.1646C3.5893 67.6897 11.5093 69.1688 21.1491 67.2718C21.9304 67.117 22.7073 66.9427 23.4799 66.7491C23.7629 67.7371 24.0733 68.7164 24.4112 69.6872C27.5277 78.6113 32.4071 84.3086 37.4661 84.3068C42.6908 84.3037 47.9283 78.1824 51.1016 68.884C51.3522 68.1492 51.5894 67.3861 51.8143 66.6003C52.8123 66.8486 53.8167 67.0689 54.8276 67.2613C64.1155 69.0185 71.4887 67.6365 74.0135 63.2525C76.6206 58.7241 73.9324 51.1291 67.461 43.7366ZM4.07313 22.9813C5.69966 20.157 12.2645 19.0552 20.8758 20.823C21.4261 20.9362 21.9859 21.0627 22.5551 21.2024C21.7143 24.9215 21.1211 28.6922 20.7793 32.4897C17.6722 34.6755 14.7098 37.0602 11.9107 39.6288C11.294 38.991 10.6938 38.3377 10.11 37.6691L10.1103 37.6693C4.68907 31.4487 2.54638 25.6326 4.07313 22.9813ZM20.4567 47.1271C18.3045 45.4974 16.3044 43.8279 14.489 42.1488C16.3031 40.48 18.3045 38.8162 20.4523 37.1909C20.375 38.8465 20.3368 40.5035 20.3376 42.1616C20.3387 43.8174 20.3784 45.4725 20.4567 47.1271ZM20.4541 63.738C16.8005 64.5504 13.0286 64.6835 9.32686 64.1306C8.31209 64.0516 7.3243 63.7654 6.42454 63.2895C5.52477 62.8137 4.73215 62.1584 4.09564 61.3641C2.56097 58.7056 4.56674 53.0262 9.8467 46.9045C10.5105 46.1374 11.1961 45.3902 11.9034 44.6631C14.7029 47.2451 17.6701 49.6391 20.7856 51.8294C21.1321 55.6755 21.7323 59.4945 22.5822 63.2614C21.8769 63.4378 21.1675 63.5967 20.4541 63.738ZM50.3877 29.8495C48.9739 28.9587 47.5426 28.0964 46.0939 27.2628C44.6683 26.4422 43.2255 25.6524 41.7656 24.8935C44.2653 23.8424 46.7225 22.9448 49.0946 22.2133C49.6538 24.7353 50.0854 27.284 50.3877 29.8495ZM27.7161 16.1667C30.398 8.36351 34.3663 3.60276 37.4262 3.60145C40.685 3.59989 44.9191 8.73682 47.6877 17.0805C47.8675 17.6244 48.0376 18.1714 48.1977 18.7215C44.5604 19.8496 41.0017 21.2172 37.5449 22.8154C34.1026 21.1984 30.555 19.8156 26.9265 18.6762C27.1691 17.8333 27.4323 16.9968 27.7161 16.1667ZM26.0284 22.1684C28.5027 22.9474 30.9362 23.8506 33.3195 24.8747C30.3664 26.3986 27.4897 28.0586 24.6892 29.8546C25.0276 27.1653 25.4778 24.5886 26.0284 22.1684ZM24.6954 54.4607C26.0919 55.3547 27.5089 56.2157 28.9463 57.0435C30.4125 57.8877 31.8982 58.6964 33.4034 59.4697C31.0019 60.5292 28.5475 61.4647 26.05 62.2726C25.493 59.8189 25.0379 57.1969 24.6954 54.4607ZM47.6929 67.72C46.5715 71.291 44.8024 74.625 42.474 77.5555L42.4737 77.5557C41.8983 78.3951 41.1569 79.1077 40.2953 79.6493C39.4336 80.1909 38.4701 80.55 37.4642 80.7046C34.3945 80.7063 30.4766 76.1309 27.8114 68.4993C27.4975 67.597 27.2088 66.6865 26.9451 65.7678C30.591 64.5916 34.1529 63.1696 37.6064 61.5115C41.0916 63.12 44.6786 64.4979 48.3444 65.6363C48.1442 66.3359 47.9271 67.0305 47.6929 67.72ZM49.2199 62.138C46.8205 61.3961 44.3277 60.4834 41.7919 59.417C43.2214 58.6647 44.6612 57.8702 46.1114 57.0335C47.5996 56.1742 49.0498 55.2933 50.4621 54.391C50.1808 56.9929 49.7661 59.5787 49.2199 62.1381V62.138ZM51.1011 42.1461C51.1043 44.706 51.0243 47.264 50.8614 49.8198C48.7846 51.2253 46.592 52.5977 44.3107 53.9147C42.0389 55.2264 39.788 56.4317 37.58 57.5226C35.2564 56.4091 32.9777 55.2091 30.7437 53.9227C28.5223 52.6441 26.3519 51.2825 24.2324 49.8381C24.0387 47.283 23.9411 44.7233 23.9396 42.1589L23.9401 42.1597C23.9383 39.5972 24.0338 37.0373 24.2265 34.4801C26.3027 33.0622 28.4794 31.6909 30.7298 30.3916C32.9906 29.0861 35.2697 27.8859 37.5363 26.7981C39.8312 27.9134 42.0847 29.1087 44.2969 30.3839C46.5167 31.6597 48.6932 33.0068 50.8264 34.425C51.0096 36.9948 51.1013 39.5685 51.1014 42.1461H51.1011ZM55.1341 20.6781C63.2331 19.1028 69.3397 20.1625 70.8695 22.812C72.4992 25.6347 70.1635 31.8686 64.3196 38.4355L64.3194 38.4358C63.9965 38.798 63.6615 39.1618 63.3144 39.5272C60.4668 36.9532 57.4474 34.5761 54.2769 32.4123C53.9569 28.6563 53.3859 24.9259 52.5677 21.2462C53.4398 21.0316 54.2952 20.8423 55.1341 20.6781ZM54.5866 37.0534C56.7252 38.6148 58.7813 40.2861 60.7467 42.0605C58.79 43.8642 56.7403 45.5643 54.6061 47.154C54.6715 45.4849 54.7036 43.8151 54.7026 42.1444C54.7018 40.447 54.6632 38.75 54.5866 37.0534ZM70.8919 61.4549C69.3598 64.1155 63.4397 65.2249 55.4966 63.7221C54.5863 63.5503 53.6523 63.3457 52.6945 63.1085C53.493 59.3814 54.0386 55.6046 54.3278 51.804C57.4929 49.6024 60.5029 47.1857 63.3363 44.571C63.8321 45.0861 64.3037 45.5987 64.751 46.109V46.1087C67.2847 48.8636 69.2896 52.0615 70.6655 55.5423C71.1055 56.46 71.3526 57.4582 71.3915 58.4751C71.4304 59.4921 71.2604 60.5063 70.8919 61.4549ZM33.7186 35.5686C32.4291 36.3131 31.3893 37.4232 30.7308 38.7586C30.0722 40.0941 29.8245 41.5948 30.0188 43.071C30.2132 44.5472 30.841 45.9327 31.8227 47.0521C32.8045 48.1716 34.0962 48.9748 35.5344 49.3601C36.9727 49.7454 38.4929 49.6956 39.9028 49.217C41.3127 48.7383 42.5491 47.8523 43.4555 46.671C44.3618 45.4897 44.8976 44.0661 44.9949 42.5803C45.0922 41.0945 44.7467 39.6133 44.0022 38.3238C43.0038 36.5949 41.3595 35.3334 39.431 34.8167C37.5025 34.3 35.4478 34.5705 33.7187 35.5686L33.7186 35.5686Z"
                    fill="#4A2C40"/>
            </svg>,
            name: 'React'
        },
        {
            svg: <svg width="72" height="85" viewBox="0 0 72 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M36.2603 50.7556C34.7987 51.4272 33.1973 52.3023 29.9914 54.0617C28.776 54.7454 27.5058 55.4291 26.3237 56.0733C26.2417 55.9913 26.1566 55.888 26.0746 55.8029C19.7328 49.0266 8.00346 44.2407 8.5018 35.1398C8.68716 31.8245 9.82667 23.1217 31.0276 12.5531C48.4758 3.95364 62.3596 6.33598 64.7571 11.6203C68.203 19.1532 57.3154 33.1707 39.2959 35.2036C37.3016 35.6081 35.2419 35.5592 33.269 35.0606C31.2961 34.562 29.4604 33.6264 27.8978 32.3229C26.9436 31.2867 26.8008 31.2259 26.4483 31.4326C25.8679 31.7364 26.2417 32.6754 26.4483 33.2132C27.1357 34.4577 28.0656 35.5518 29.183 36.4307C30.3005 37.3096 31.5828 37.9556 32.9542 38.3304C40.0453 39.8631 47.4387 39.1308 54.0913 36.2367C65.0124 32.0099 73.539 20.2593 71.0412 10.4078C68.5342 0.419641 51.9551 -2.8743 36.2694 2.69866C26.4461 6.009 17.3703 11.2201 9.55927 18.035C0.91722 26.1179 -0.450191 33.1433 0.108929 36.0848C2.12054 46.5288 16.5179 53.3263 22.2914 58.3615C21.9875 58.5286 21.7323 58.6653 21.5044 58.796C18.6237 60.2272 7.64185 65.9673 4.90399 72.0386C1.7954 78.9182 5.40233 83.85 7.78467 84.5125C11.3749 85.3724 15.144 85.0897 18.5657 83.7038C21.9874 82.3179 24.8909 79.898 26.8707 76.782C28.5519 74.1981 29.5843 71.2465 29.8801 68.178C30.1758 65.1095 29.7261 62.015 28.5693 59.1576C29.2519 58.6132 29.9797 58.1283 30.745 57.7081C32.2158 56.8391 33.6166 55.9822 34.8594 55.3197C39.1148 53.3265 43.7586 52.3002 48.4576 52.3145C58.3212 53.4752 60.269 59.6286 59.8952 62.2206C59.7204 63.1402 59.3506 64.0117 58.8107 64.7765C58.2708 65.5412 57.5734 66.1814 56.7654 66.6541C56.0817 67.0886 55.8538 67.2345 55.9145 67.5444C55.9966 68.0002 56.3278 67.9789 56.9082 67.8969C58.3901 67.4285 59.6958 66.5228 60.6535 65.2988C61.6113 64.0748 62.1763 62.5896 62.2745 61.0386C62.5784 54.9612 56.7836 48.2943 46.525 48.355C43.4532 48.3603 40.4122 48.9663 37.573 50.1388C37.1172 50.3272 36.6746 50.5297 36.2451 50.7465L36.2603 50.7556ZM21.5986 74.5759C18.3229 78.1403 13.7648 79.4865 11.7957 78.347C9.66866 77.1315 10.5104 71.8593 14.5306 68.0883C16.9116 65.943 19.4851 64.0216 22.2185 62.3482C22.6955 62.0444 23.4005 61.6432 24.2483 61.1328C24.3942 61.0507 24.4762 61.0082 24.4762 61.0082L24.9746 60.7043C25.6916 63.1082 25.7568 65.6595 25.1636 68.0969C24.5704 70.5344 23.3401 72.7703 21.5986 74.5759Z"
                    fill="#4A2C40"/>
            </svg>,
            name: 'Scss'
        },
        {
            svg: <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M37.3199 0C36.3143 0 35.3087 0.385159 34.5382 1.15573L28.489 7.20492L35.2646 13.9802C35.9266 13.755 36.6207 13.6388 37.3199 13.6361C39.033 13.6361 40.6759 14.3166 41.8873 15.5279C43.0986 16.7393 43.7791 18.3822 43.7791 20.0953C43.7772 20.795 43.6615 21.4897 43.4367 22.1523L52.4891 31.2047C53.1511 30.9795 53.8452 30.8633 54.5444 30.8606C56.2575 30.8606 57.9004 31.5411 59.1118 32.7525C60.3231 33.9638 61.0036 35.6067 61.0036 37.3198C61.0036 39.0329 60.3231 40.6758 59.1118 41.8871C57.9004 43.0985 56.2575 43.779 54.5444 43.779C52.8313 43.779 51.1884 43.0985 49.9771 41.8871C48.7658 40.6758 48.0852 39.0329 48.0852 37.3198C48.0872 36.6202 48.2029 35.9256 48.4276 35.2631L40.1907 27.0261V48.7667C41.267 49.3007 42.173 50.1243 42.8069 51.145C43.4408 52.1656 43.7775 53.3428 43.7791 54.5443C43.7791 56.2574 43.0986 57.9003 41.8873 59.1117C40.6759 60.323 39.033 61.0035 37.3199 61.0035C35.6068 61.0035 33.9639 60.323 32.7526 59.1117C31.5412 57.9003 30.8607 56.2574 30.8607 54.5443C30.8613 53.3419 31.1975 52.1635 31.8314 51.1417C32.4654 50.12 33.372 49.2955 34.4492 48.7611V25.8729C33.3729 25.3389 32.4668 24.5153 31.8329 23.4946C31.199 22.474 30.8623 21.2968 30.8607 20.0953C30.8627 19.3957 30.9783 18.7011 31.2031 18.0386L24.4292 11.2647L1.15586 34.538C-0.385285 36.0792 -0.385285 38.5604 1.15586 40.1015L34.5382 73.4838C36.0793 75.025 38.5605 75.025 40.1017 73.4838L73.484 40.1015C75.0251 38.5604 75.0251 36.0792 73.484 34.538L40.1017 1.15573C39.3311 0.385159 38.3256 0 37.3199 0V0Z"
                    fill="#4A2C40"/>
            </svg>,
            name: 'Git'
        },
        {
            svg: <svg width="39" height="85" viewBox="0 0 39 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M32.7902 64.9274L30.4492 69.0117L29.6855 82.327C29.6855 83.8046 24.9869 85 19.2092 85C13.4315 85 8.73298 83.8046 8.73298 82.327L7.77003 69.1445L5.29624 64.9274C12.1365 67.7997 26.2155 67.7001 32.7902 64.9274ZM0.249039 22.873L2.507 43.7093C3.48655 40.3888 5.96034 35.9061 9.14805 34.5446C10.194 34.0964 11.2566 34.0964 12.2527 34.6941C13.1161 35.1921 13.8466 36.2381 13.9296 36.6532C14.1288 37.7323 13.5975 38.164 13.1825 38.164C12.6844 38.164 12.3025 37.4003 12.0535 36.952C11.3728 35.74 10.3434 35.6902 9.24766 36.4871C8.10208 37.3173 7.10592 38.7119 6.40861 39.9239C5.56188 41.3849 4.84797 42.9954 4.4163 44.6058C4.16726 45.5356 3.93482 47.0298 4.31668 47.9097C4.48271 48.275 4.73175 48.5074 5.13021 48.5074C5.96034 48.5074 7.17233 47.4117 7.75342 46.8306C8.50054 46.0835 9.46349 44.9213 9.82875 44.1742L10.6921 41.6007C11.1238 40.4718 12.3357 40.671 12.3357 41.6007C12.3357 43.2942 11.7215 43.8587 10.6755 47.3619C9.71253 50.5994 9.41369 51.6453 9.41369 51.6453C9.29747 52.1102 8.8492 52.8905 8.36772 52.8905C8.16849 52.8905 8.01907 52.8241 7.93605 52.6913C7.77003 52.4589 7.78663 51.8114 7.80323 51.6453C7.83644 51.1141 8.8492 47.9596 9.01522 47.4615C8.68317 47.8267 8.33452 48.192 7.95266 48.5572C7.05611 49.404 5.61169 50.5164 4.38309 50.5164C3.8186 50.5164 3.45335 50.3669 3.10469 50.1179L4.36649 63.3336C4.69854 64.1637 10.8747 66.1726 19.01 66.1726C27.1619 66.1726 33.3381 64.1471 33.6535 63.3336L35.4632 47.6275C34.5168 48.4908 33.4211 49.5534 32.2091 50.0847C31.3125 50.4666 29.3202 50.7156 29.3202 49.1383C29.3202 48.275 30.8311 46.6812 31.711 45.5688C31.9434 45.2865 32.4913 44.5892 32.4913 44.224C32.4913 43.7425 31.4952 43.8587 30.5488 44.639C30.0175 45.0873 29.5195 45.685 29.1044 46.2495C28.3905 47.2456 28.0086 48.109 27.6932 48.8229C26.6638 51.1805 27.0125 50.2507 26.1823 52.4755C25.3522 54.6836 25.485 54.4346 25.319 54.7998C25.1696 55.1153 24.9537 55.3809 24.6549 55.547C24.3394 55.713 23.9078 55.6964 23.6421 55.4971C23.4927 55.3975 23.4263 55.1817 23.4263 54.8828C23.4263 54.7334 23.4429 54.584 23.4761 54.4346C23.7251 53.4218 24.7711 51.4295 25.9665 48.7399C26.2321 48.1256 26.1325 48.3082 26.0993 48.358C25.07 49.3542 24.2896 49.8356 23.7085 50.1013C22.7456 50.533 21.5502 50.533 21.3012 49.4206C21.2846 49.3542 21.2846 49.2878 21.268 49.2214C19.3088 50.7488 17.2335 51.1639 17.9474 47.8765C17.1837 49.238 15.8555 50.3503 14.2284 50.3503C13.5477 50.3503 13.0497 50.1179 12.8006 49.5036C12.4188 48.5905 13.0165 47.0298 13.5643 45.5522C13.8466 44.8051 14.2284 43.9085 14.7431 42.8625C15.0088 42.2981 15.4404 41.966 16.0049 42.1154C16.1045 42.1486 16.1876 42.1818 16.2706 42.2316C16.7022 42.5305 16.5362 42.9788 16.3204 43.427C15.6895 44.6722 15.1416 45.5854 14.7763 46.8804C14.6269 47.4283 14.4443 48.3746 15.0254 48.3746C15.4238 48.3746 15.8057 48.2418 16.171 47.9762C16.9347 47.4117 17.549 46.5649 18.0138 45.7348C18.3459 45.1371 18.7444 44.3568 18.9436 43.6927C19.0266 43.4104 19.1262 43.1448 19.2424 42.8958C19.4251 42.4807 19.6741 42.049 20.1058 42.049C20.3216 42.049 20.5042 42.132 20.6371 42.2981C20.9193 42.6633 20.8529 43.0452 20.7035 43.4436C20.3714 44.3734 19.9231 45.2035 19.5579 46.2163C19.3421 46.7974 19.1096 47.5445 19.1096 48.1588C19.1096 48.7233 19.7239 48.5905 20.2386 48.358C20.6371 48.1754 21.0355 47.8931 21.3676 47.6109C21.5668 46.7974 21.517 46.98 25.7507 36.2879C25.9665 35.74 26.365 35.5076 26.7634 35.5076C26.9627 35.5076 27.1287 35.574 27.2947 35.6902C27.577 35.9061 27.577 36.3709 27.4607 36.7196C27.3445 37.035 27.3611 36.9354 26.7136 38.4629C25.8503 40.4718 25.2858 41.9162 24.5221 43.7591C24.2066 44.5228 23.2437 46.897 23.0776 47.4615C22.978 47.8267 22.8618 48.4244 23.2437 48.4244C24.1402 48.4244 26.448 46.2495 27.0789 45.602C27.1121 45.5522 27.1619 45.5356 27.2283 45.5024C27.3279 45.1869 27.4275 44.8881 27.5105 44.5892C27.743 43.9583 27.9588 43.2278 28.3905 42.7131C28.5233 42.5471 28.6727 42.4475 28.8388 42.4475C29.3036 42.4475 29.5361 42.6467 29.5361 43.1116C29.5361 43.2942 29.4198 43.9583 29.3534 44.1409C29.5859 43.8919 29.8349 43.6429 30.1006 43.3938C32.5909 41.0861 34.3674 42.2649 34.3674 43.427C34.3674 44.6556 32.8898 46.3657 32.0763 47.312C31.8106 47.6275 31.2627 48.2086 31.2461 48.3746C31.2461 48.5905 31.3956 48.6735 31.6114 48.6735C31.9434 48.6735 32.674 48.0924 32.9396 47.8931C33.7697 47.2456 34.8987 46.2495 35.6956 45.5522L38.1528 22.8398C33.089 25.6788 5.34604 25.6954 0.249039 22.873ZM38.3853 21.4618C38.3853 24.9483 0 24.9483 0 21.4618C0 20.0007 8.60016 18.822 19.1926 18.822C20.6869 18.822 22.1479 18.8386 23.5591 18.8884L25.6511 10.8029L35.8285 0.0941952C36.0609 -0.138241 36.7914 0.0609899 37.4721 0.675287C38.1528 1.28958 38.5679 1.98689 38.3521 2.21933L38.3355 2.23593L28.8221 12.2805L27.1619 19.0378C33.7863 19.4695 38.3853 20.3826 38.3853 21.4618ZM26.863 22.2255C26.863 22.0927 26.7136 21.9764 26.448 21.8768L26.4148 22.0097C26.4148 22.2255 25.5846 22.4081 24.5719 22.4081C23.5591 22.4081 22.729 22.2255 22.729 22.0097C22.729 21.9931 22.729 21.9764 22.7456 21.9598L22.7788 21.8436C22.4799 21.9432 22.2807 22.0761 22.2807 22.2255C22.2807 22.5741 23.3101 22.8398 24.5553 22.8398C25.8337 22.8564 26.863 22.5741 26.863 22.2255Z"
                    fill="#4A2C40"/>
            </svg>,
            name: 'Gulp'
        }
    ]

    const portfolio = [
        {
            img: insurance,
            link: 'https://insurance-site.netlify.app/',
            github: 'https://github.com/stclamp/insurance',
            based: [
                <svg width="75" height="86" viewBox="0 0 75 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 0L6.82543 76.5469L37.4548 85.0521L68.1639 76.5363L75 0H0.005316H0ZM60.1425 25.0372H24.2186L25.0744 34.6534H59.2919L56.7138 63.4754L37.4548 68.8125L18.2224 63.4754L16.9094 48.7295H26.3343L27.004 56.2247L37.4601 59.0421L37.4814 59.0368L47.9428 56.2141L49.0272 44.041H16.4895L13.9592 15.6496H60.9877L60.1478 25.0372H60.1425Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M75 0L65 57.5L30.1094 70L0 57.5L3.0625 42.6875H15.875L14.625 49.0312L32.8125 55.9688L53.7656 49.0312L56.7031 33.8594H4.60938L7.10938 21.0469H59.25L60.8906 12.8125H8.79688L11.3438 0H75Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="54" viewBox="0 0 75 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M46.4774 37.304C47.4468 39.2691 48.951 40.9209 50.817 42.0695C52.6831 43.2181 54.8354 43.8169 57.0265 43.7972C61.4574 43.7972 64.2884 41.5817 64.2884 38.5226C64.2884 34.8573 61.3793 33.5574 56.5047 31.4232L53.8299 30.2764C46.1149 26.9892 40.9872 22.8708 40.9872 14.1653C40.9872 6.14407 47.0992 0.0414517 56.6484 0.0414517C59.7477 -0.183434 62.8445 0.510282 65.5516 2.03587C68.2588 3.56145 70.4561 5.85121 71.869 8.61886L63.5416 13.9653C62.9963 12.5938 62.0466 11.4208 60.8187 10.602C59.5908 9.78318 58.1428 9.35743 56.6671 9.3813C56.0239 9.31658 55.3743 9.38661 54.7596 9.58692C54.145 9.78724 53.5788 10.1134 53.0973 10.5447C52.6157 10.976 52.2293 11.503 51.9627 12.0919C51.6961 12.6808 51.5551 13.3189 51.5488 13.9653C51.5488 17.1744 53.5362 18.4712 58.1108 20.4585L60.7856 21.6022C69.8723 25.4987 75 29.4702 75 38.4008C75 48.0281 67.4381 53.3026 57.2796 53.3026C53.3227 53.5543 49.3774 52.6557 45.9198 50.7151C42.4622 48.7745 39.64 45.8749 37.7937 42.366L46.4774 37.304ZM8.70552 38.2414C10.3866 41.2224 11.9146 43.7409 15.5799 43.7409C19.0922 43.7409 21.3107 42.366 21.3107 37.0227V0.666399H32.0036V37.1727C32.0036 48.2437 25.5104 53.2839 16.0362 53.2839C12.6895 53.465 9.36646 52.6289 6.50414 50.8854C3.64181 49.1419 1.37432 46.5727 0 43.5159L8.70552 38.2414Z"
                        fill="#4A2C40"/>
                </svg>
            ]
        },
        {
            img: digitalFlow,
            link: 'https://digital-flow.netlify.app/',
            github: 'https://github.com/stclamp/digital-flow',
            based: [
                <svg width="75" height="86" viewBox="0 0 75 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 0L6.82543 76.5469L37.4548 85.0521L68.1639 76.5363L75 0H0.005316H0ZM60.1425 25.0372H24.2186L25.0744 34.6534H59.2919L56.7138 63.4754L37.4548 68.8125L18.2224 63.4754L16.9094 48.7295H26.3343L27.004 56.2247L37.4601 59.0421L37.4814 59.0368L47.9428 56.2141L49.0272 44.041H16.4895L13.9592 15.6496H60.9877L60.1478 25.0372H60.1425Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M75 0L65 57.5L30.1094 70L0 57.5L3.0625 42.6875H15.875L14.625 49.0312L32.8125 55.9688L53.7656 49.0312L56.7031 33.8594H4.60938L7.10938 21.0469H59.25L60.8906 12.8125H8.79688L11.3438 0H75Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="54" viewBox="0 0 75 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M46.4774 37.304C47.4468 39.2691 48.951 40.9209 50.817 42.0695C52.6831 43.2181 54.8354 43.8169 57.0265 43.7972C61.4574 43.7972 64.2884 41.5817 64.2884 38.5226C64.2884 34.8573 61.3793 33.5574 56.5047 31.4232L53.8299 30.2764C46.1149 26.9892 40.9872 22.8708 40.9872 14.1653C40.9872 6.14407 47.0992 0.0414517 56.6484 0.0414517C59.7477 -0.183434 62.8445 0.510282 65.5516 2.03587C68.2588 3.56145 70.4561 5.85121 71.869 8.61886L63.5416 13.9653C62.9963 12.5938 62.0466 11.4208 60.8187 10.602C59.5908 9.78318 58.1428 9.35743 56.6671 9.3813C56.0239 9.31658 55.3743 9.38661 54.7596 9.58692C54.145 9.78724 53.5788 10.1134 53.0973 10.5447C52.6157 10.976 52.2293 11.503 51.9627 12.0919C51.6961 12.6808 51.5551 13.3189 51.5488 13.9653C51.5488 17.1744 53.5362 18.4712 58.1108 20.4585L60.7856 21.6022C69.8723 25.4987 75 29.4702 75 38.4008C75 48.0281 67.4381 53.3026 57.2796 53.3026C53.3227 53.5543 49.3774 52.6557 45.9198 50.7151C42.4622 48.7745 39.64 45.8749 37.7937 42.366L46.4774 37.304ZM8.70552 38.2414C10.3866 41.2224 11.9146 43.7409 15.5799 43.7409C19.0922 43.7409 21.3107 42.366 21.3107 37.0227V0.666399H32.0036V37.1727C32.0036 48.2437 25.5104 53.2839 16.0362 53.2839C12.6895 53.465 9.36646 52.6289 6.50414 50.8854C3.64181 49.1419 1.37432 46.5727 0 43.5159L8.70552 38.2414Z"
                        fill="#4A2C40"/>
                </svg>
            ]
        },
        {
            img: domeo,
            link: 'https://domeo.netlify.app/',
            github: 'https://github.com/stclamp/domeo',
            based: [
                <svg width="75" height="86" viewBox="0 0 75 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 0L6.82543 76.5469L37.4548 85.0521L68.1639 76.5363L75 0H0.005316H0ZM60.1425 25.0372H24.2186L25.0744 34.6534H59.2919L56.7138 63.4754L37.4548 68.8125L18.2224 63.4754L16.9094 48.7295H26.3343L27.004 56.2247L37.4601 59.0421L37.4814 59.0368L47.9428 56.2141L49.0272 44.041H16.4895L13.9592 15.6496H60.9877L60.1478 25.0372H60.1425Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M75 0L65 57.5L30.1094 70L0 57.5L3.0625 42.6875H15.875L14.625 49.0312L32.8125 55.9688L53.7656 49.0312L56.7031 33.8594H4.60938L7.10938 21.0469H59.25L60.8906 12.8125H8.79688L11.3438 0H75Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="54" viewBox="0 0 75 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M46.4774 37.304C47.4468 39.2691 48.951 40.9209 50.817 42.0695C52.6831 43.2181 54.8354 43.8169 57.0265 43.7972C61.4574 43.7972 64.2884 41.5817 64.2884 38.5226C64.2884 34.8573 61.3793 33.5574 56.5047 31.4232L53.8299 30.2764C46.1149 26.9892 40.9872 22.8708 40.9872 14.1653C40.9872 6.14407 47.0992 0.0414517 56.6484 0.0414517C59.7477 -0.183434 62.8445 0.510282 65.5516 2.03587C68.2588 3.56145 70.4561 5.85121 71.869 8.61886L63.5416 13.9653C62.9963 12.5938 62.0466 11.4208 60.8187 10.602C59.5908 9.78318 58.1428 9.35743 56.6671 9.3813C56.0239 9.31658 55.3743 9.38661 54.7596 9.58692C54.145 9.78724 53.5788 10.1134 53.0973 10.5447C52.6157 10.976 52.2293 11.503 51.9627 12.0919C51.6961 12.6808 51.5551 13.3189 51.5488 13.9653C51.5488 17.1744 53.5362 18.4712 58.1108 20.4585L60.7856 21.6022C69.8723 25.4987 75 29.4702 75 38.4008C75 48.0281 67.4381 53.3026 57.2796 53.3026C53.3227 53.5543 49.3774 52.6557 45.9198 50.7151C42.4622 48.7745 39.64 45.8749 37.7937 42.366L46.4774 37.304ZM8.70552 38.2414C10.3866 41.2224 11.9146 43.7409 15.5799 43.7409C19.0922 43.7409 21.3107 42.366 21.3107 37.0227V0.666399H32.0036V37.1727C32.0036 48.2437 25.5104 53.2839 16.0362 53.2839C12.6895 53.465 9.36646 52.6289 6.50414 50.8854C3.64181 49.1419 1.37432 46.5727 0 43.5159L8.70552 38.2414Z"
                        fill="#4A2C40"/>
                </svg>
            ]
        },
        {
            img: trafficShark,
            link: 'https://traffic-shark.netlify.app/',
            github: 'https://github.com/stclamp/traffic_shark',
            based: [
                <svg width="75" height="86" viewBox="0 0 75 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 0L6.82543 76.5469L37.4548 85.0521L68.1639 76.5363L75 0H0.005316H0ZM60.1425 25.0372H24.2186L25.0744 34.6534H59.2919L56.7138 63.4754L37.4548 68.8125L18.2224 63.4754L16.9094 48.7295H26.3343L27.004 56.2247L37.4601 59.0421L37.4814 59.0368L47.9428 56.2141L49.0272 44.041H16.4895L13.9592 15.6496H60.9877L60.1478 25.0372H60.1425Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M75 0L65 57.5L30.1094 70L0 57.5L3.0625 42.6875H15.875L14.625 49.0312L32.8125 55.9688L53.7656 49.0312L56.7031 33.8594H4.60938L7.10938 21.0469H59.25L60.8906 12.8125H8.79688L11.3438 0H75Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="54" viewBox="0 0 75 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M46.4774 37.304C47.4468 39.2691 48.951 40.9209 50.817 42.0695C52.6831 43.2181 54.8354 43.8169 57.0265 43.7972C61.4574 43.7972 64.2884 41.5817 64.2884 38.5226C64.2884 34.8573 61.3793 33.5574 56.5047 31.4232L53.8299 30.2764C46.1149 26.9892 40.9872 22.8708 40.9872 14.1653C40.9872 6.14407 47.0992 0.0414517 56.6484 0.0414517C59.7477 -0.183434 62.8445 0.510282 65.5516 2.03587C68.2588 3.56145 70.4561 5.85121 71.869 8.61886L63.5416 13.9653C62.9963 12.5938 62.0466 11.4208 60.8187 10.602C59.5908 9.78318 58.1428 9.35743 56.6671 9.3813C56.0239 9.31658 55.3743 9.38661 54.7596 9.58692C54.145 9.78724 53.5788 10.1134 53.0973 10.5447C52.6157 10.976 52.2293 11.503 51.9627 12.0919C51.6961 12.6808 51.5551 13.3189 51.5488 13.9653C51.5488 17.1744 53.5362 18.4712 58.1108 20.4585L60.7856 21.6022C69.8723 25.4987 75 29.4702 75 38.4008C75 48.0281 67.4381 53.3026 57.2796 53.3026C53.3227 53.5543 49.3774 52.6557 45.9198 50.7151C42.4622 48.7745 39.64 45.8749 37.7937 42.366L46.4774 37.304ZM8.70552 38.2414C10.3866 41.2224 11.9146 43.7409 15.5799 43.7409C19.0922 43.7409 21.3107 42.366 21.3107 37.0227V0.666399H32.0036V37.1727C32.0036 48.2437 25.5104 53.2839 16.0362 53.2839C12.6895 53.465 9.36646 52.6289 6.50414 50.8854C3.64181 49.1419 1.37432 46.5727 0 43.5159L8.70552 38.2414Z"
                        fill="#4A2C40"/>
                </svg>
            ]
        },
        {
            img: lightBoost,
            link: 'https://light-boost-rpg.netlify.app/',
            github: 'https://github.com/stclamp/Light-boost',
            based: [
                <svg width="75" height="86" viewBox="0 0 75 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 0L6.82543 76.5469L37.4548 85.0521L68.1639 76.5363L75 0H0.005316H0ZM60.1425 25.0372H24.2186L25.0744 34.6534H59.2919L56.7138 63.4754L37.4548 68.8125L18.2224 63.4754L16.9094 48.7295H26.3343L27.004 56.2247L37.4601 59.0421L37.4814 59.0368L47.9428 56.2141L49.0272 44.041H16.4895L13.9592 15.6496H60.9877L60.1478 25.0372H60.1425Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M75 0L65 57.5L30.1094 70L0 57.5L3.0625 42.6875H15.875L14.625 49.0312L32.8125 55.9688L53.7656 49.0312L56.7031 33.8594H4.60938L7.10938 21.0469H59.25L60.8906 12.8125H8.79688L11.3438 0H75Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="54" viewBox="0 0 75 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M46.4774 37.304C47.4468 39.2691 48.951 40.9209 50.817 42.0695C52.6831 43.2181 54.8354 43.8169 57.0265 43.7972C61.4574 43.7972 64.2884 41.5817 64.2884 38.5226C64.2884 34.8573 61.3793 33.5574 56.5047 31.4232L53.8299 30.2764C46.1149 26.9892 40.9872 22.8708 40.9872 14.1653C40.9872 6.14407 47.0992 0.0414517 56.6484 0.0414517C59.7477 -0.183434 62.8445 0.510282 65.5516 2.03587C68.2588 3.56145 70.4561 5.85121 71.869 8.61886L63.5416 13.9653C62.9963 12.5938 62.0466 11.4208 60.8187 10.602C59.5908 9.78318 58.1428 9.35743 56.6671 9.3813C56.0239 9.31658 55.3743 9.38661 54.7596 9.58692C54.145 9.78724 53.5788 10.1134 53.0973 10.5447C52.6157 10.976 52.2293 11.503 51.9627 12.0919C51.6961 12.6808 51.5551 13.3189 51.5488 13.9653C51.5488 17.1744 53.5362 18.4712 58.1108 20.4585L60.7856 21.6022C69.8723 25.4987 75 29.4702 75 38.4008C75 48.0281 67.4381 53.3026 57.2796 53.3026C53.3227 53.5543 49.3774 52.6557 45.9198 50.7151C42.4622 48.7745 39.64 45.8749 37.7937 42.366L46.4774 37.304ZM8.70552 38.2414C10.3866 41.2224 11.9146 43.7409 15.5799 43.7409C19.0922 43.7409 21.3107 42.366 21.3107 37.0227V0.666399H32.0036V37.1727C32.0036 48.2437 25.5104 53.2839 16.0362 53.2839C12.6895 53.465 9.36646 52.6289 6.50414 50.8854C3.64181 49.1419 1.37432 46.5727 0 43.5159L8.70552 38.2414Z"
                        fill="#4A2C40"/>
                </svg>
            ]
        },
        {
            img: restaurants,
            link: 'https://restaurants-bd.netlify.app/',
            github: 'https://github.com/stclamp/restaurants',
            based: [
                <svg width="75" height="86" viewBox="0 0 75 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 0L6.82543 76.5469L37.4548 85.0521L68.1639 76.5363L75 0H0.005316H0ZM60.1425 25.0372H24.2186L25.0744 34.6534H59.2919L56.7138 63.4754L37.4548 68.8125L18.2224 63.4754L16.9094 48.7295H26.3343L27.004 56.2247L37.4601 59.0421L37.4814 59.0368L47.9428 56.2141L49.0272 44.041H16.4895L13.9592 15.6496H60.9877L60.1478 25.0372H60.1425Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M75 0L65 57.5L30.1094 70L0 57.5L3.0625 42.6875H15.875L14.625 49.0312L32.8125 55.9688L53.7656 49.0312L56.7031 33.8594H4.60938L7.10938 21.0469H59.25L60.8906 12.8125H8.79688L11.3438 0H75Z"
                        fill="#4A2C40"/>
                </svg>,
                <svg width="75" height="54" viewBox="0 0 75 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M46.4774 37.304C47.4468 39.2691 48.951 40.9209 50.817 42.0695C52.6831 43.2181 54.8354 43.8169 57.0265 43.7972C61.4574 43.7972 64.2884 41.5817 64.2884 38.5226C64.2884 34.8573 61.3793 33.5574 56.5047 31.4232L53.8299 30.2764C46.1149 26.9892 40.9872 22.8708 40.9872 14.1653C40.9872 6.14407 47.0992 0.0414517 56.6484 0.0414517C59.7477 -0.183434 62.8445 0.510282 65.5516 2.03587C68.2588 3.56145 70.4561 5.85121 71.869 8.61886L63.5416 13.9653C62.9963 12.5938 62.0466 11.4208 60.8187 10.602C59.5908 9.78318 58.1428 9.35743 56.6671 9.3813C56.0239 9.31658 55.3743 9.38661 54.7596 9.58692C54.145 9.78724 53.5788 10.1134 53.0973 10.5447C52.6157 10.976 52.2293 11.503 51.9627 12.0919C51.6961 12.6808 51.5551 13.3189 51.5488 13.9653C51.5488 17.1744 53.5362 18.4712 58.1108 20.4585L60.7856 21.6022C69.8723 25.4987 75 29.4702 75 38.4008C75 48.0281 67.4381 53.3026 57.2796 53.3026C53.3227 53.5543 49.3774 52.6557 45.9198 50.7151C42.4622 48.7745 39.64 45.8749 37.7937 42.366L46.4774 37.304ZM8.70552 38.2414C10.3866 41.2224 11.9146 43.7409 15.5799 43.7409C19.0922 43.7409 21.3107 42.366 21.3107 37.0227V0.666399H32.0036V37.1727C32.0036 48.2437 25.5104 53.2839 16.0362 53.2839C12.6895 53.465 9.36646 52.6289 6.50414 50.8854C3.64181 49.1419 1.37432 46.5727 0 43.5159L8.70552 38.2414Z"
                        fill="#4A2C40"/>
                </svg>
            ]
        }
    ]

    const [isActive, setIsActive] = useState(false)

    const onMenuClick = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="App">
            <Aside avatar={avatar} menu={menu} onMenuClick={onMenuClick} isActive={isActive}/>
            <About isActive={isActive}/>
            <Experience isActive={isActive} experience={experience}/>
            <Education isActive={isActive} education={education}/>
            <Skills isActive={isActive} skills={skills}/>
            <Portfolio isActive={isActive} portfolio={portfolio}/>
            <Footer isActive={isActive}/>
        </div>
    );
}

export default App;
