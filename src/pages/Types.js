import React from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import imgMbti from 'img/sample1.png'
import { Link } from 'react-router-dom';
import icoHome from 'img/ico_3d_home.png'
import icoSearch from 'img/ico_search.png'
import imgtype from 'img/sample1.png'


function Types() {
    return (
        <div className="Types">
            <header className='subHeader'>
                <div className="wrapper">
                    <a href="javascript:history.back()" className='btn-back'>
                        <img src={btnBack} alt="back" />
                    </a>
                    <div className='text'>
                        <img src={logo} alt="logo" />
                        <h1>모든 여행 스타일 유형 보기</h1>
                    </div>
                </div>
                <div className="ani-circles2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <div className="contents wrapper sub">
                <div className="contents__Types">
                    <div className="searchbox">
                        <input type="text" placeholder='스타일 유형 검색' />
                        <button>
                            <img src={icoSearch} alt="" />
                        </button>
                    </div>
                    <div className="types__items">
                        <div className="item">
                            <div className="img">
                                <img src={imgtype} alt="" />
                            </div>
                            <h2>무등산 수박농부</h2>
                            <p className='hashtag'>#만능재주꾼 #효율코패스 #체험여행 #압축여행</p>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={imgtype} alt="" />
                            </div>
                            <h2>무등산 수박농부</h2>
                            <p className='hashtag'>#만능재주꾼 #효율코패스 #체험여행 #압축여행</p>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={imgtype} alt="" />
                            </div>
                            <h2>무등산 수박농부</h2>
                            <p className='hashtag'>#만능재주꾼 #효율코패스 #체험여행 #압축여행</p>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={imgtype} alt="" />
                            </div>
                            <h2>무등산 수박농부</h2>
                            <p className='hashtag'>#만능재주꾼 #효율코패스 #체험여행 #압축여행</p>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={imgtype} alt="" />
                            </div>
                            <h2>무등산 수박농부</h2>
                            <p className='hashtag'>#만능재주꾼 #효율코패스 #체험여행 #압축여행</p>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={imgtype} alt="" />
                            </div>
                            <h2>무등산 수박농부</h2>
                            <p className='hashtag'>#만능재주꾼 #효율코패스 #체험여행 #압축여행</p>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={imgtype} alt="" />
                            </div>
                            <h2>무등산 수박농부</h2>
                            <p className='hashtag'>#만능재주꾼 #효율코패스 #체험여행 #압축여행</p>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={imgtype} alt="" />
                            </div>
                            <h2>무등산 수박농부</h2>
                            <p className='hashtag'>#만능재주꾼 #효율코패스 #체험여행 #압축여행</p>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={imgtype} alt="" />
                            </div>
                            <h2>무등산 수박농부</h2>
                            <p className='hashtag'>#만능재주꾼 #효율코패스 #체험여행 #압축여행</p>
                        </div>
                    </div>
                </div>
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
            </div>
            <div className="btmBg"></div>
        </div>
    );
}

export default Types;
