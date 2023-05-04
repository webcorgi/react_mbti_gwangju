import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import icoHome from 'img/ico_3d_home.png'
import icoGwangju from 'img/logo_symbol.png'
import icoTypes from 'img/ico_3d_types.png'
import SelectFlag from './SelectFlag';

function Nav() {
    const [isShow, setIsShow] = useState(false);

    const clickNav = () => {
        setIsShow(isShow==true?false:true)
    }

    return (
        <div className='nav_wrapper'>
            <button className="btn_nav" onClick={() => clickNav()}>
                {isShow ? `>` : `<`}
            </button>
            {isShow &&
                <nav>
                    <Link to="/">
                        <div>
                            <img src={icoHome} alt="home"/>
                            <span>HOME</span>
                        </div>
                    </Link>
                    <a href="https://www.donggu.kr/index.es?sid=a9" target="_blank">
                        <div>
                            <img src={icoGwangju} alt="gwangju"/>
                            <span>광주동구<br/>문화관광</span>
                        </div>
                    </a>
                    <Link to="/types">
                        <div>
                            <img src={icoTypes} alt=""/>
                            <span>전체유형</span>
                        </div>
                    </Link>
                    <SelectFlag />
                </nav>
            }
            
        </div>
    );
}

export default Nav;
