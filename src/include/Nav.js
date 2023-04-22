import React from 'react';
import { Link } from 'react-router-dom';
import icoHome from 'img/ico_3d_home.png'

function Nav() {
    return (
        <nav>
        <Link to="/">
            <img src={icoHome} alt="home"/>
        </Link>
        <a href="https://www.donggu.kr/index.es?sid=a9" target="_blank">
            광주광역시<br/>
            동구 문화관광
        </a>
        <Link to="/types">전체유형</Link>
        <button>한국어</button>
    </nav>
    );
}

export default Nav;
