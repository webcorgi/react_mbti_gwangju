import React from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import { Link, useNavigate } from 'react-router-dom';
import imgSearch from 'img/ico_search.png'
import imgPlace from 'img/sample1.png'
import imgFirst from 'img/first.png'
import imgPrev from 'img/prev.png'
import imgNext from 'img/next.png'
import imgLast from 'img/last.png'
import Nav from 'include/Nav';

function Trip() {
    const navigate = useNavigate();
    return (
        <div className="Trip">
            <header className='subHeader'>
                <div className="wrapper">
                    <Link onClick={() => navigate(-1)} className='btn-back'>
                        <img src={btnBack} alt="back" />
                    </Link>
                    <div className='text'>
                        <img src={logo} alt="logo" />
                        <h1>광주광역시 동구 여행 스타일별 추천여행</h1>
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
                <div className="leftNav">
                    <Link to="" className='active'>여행 스타일별 추천여행</Link>
                    <Link to="">관광명소</Link>
                    <Link to="">음식</Link>
                    <Link to="">숙박</Link>
                    <Link to="">체험</Link>
                    <Link to="">쇼핑</Link>
                    <Link to="">전시공연</Link>
                </div>
                <div className="contents__trip">
                    <h2>여행 스타일별 추천여행</h2>
                    <div className="searchbox">
                        <select name="" id="">
                            <option value="">전체</option>
                        </select>
                        <input type="text" placeholder='여행 스타일별 추천여행' />
                        <button>
                            <img src={imgSearch} alt="" />
                        </button>
                    </div>

                    <div className="list__top">
                        <div className="selects">
                            <select name="" id="">
                                <option value="">여행 스타일</option>
                            </select>
                            <select name="" id="">
                                <option value="">여행 동기</option>
                            </select>
                            <select name="" id="">
                                <option value="">여행 속성</option>
                            </select>
                        </div>
                        <p>총 10건의 추천 여행지가 있습니다.</p>
                    </div>

                    <Link to="/detail" className="item">
                        <div className="img">
                            <img src={imgPlace} alt="" />
                        </div>
                        <div className="text">
                            <h3>광주동구 관광지</h3>
                            <p>
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광
                            </p>
                        </div>
                    </Link>
                    <Link to="/detail" className="item">
                        <div className="img">
                            <img src={imgPlace} alt="" />
                        </div>
                        <div className="text">
                            <h3>광주동구 관광지</h3>
                            <p>
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광
                            </p>
                        </div>
                    </Link>
                    <Link to="/detail" className="item">
                        <div className="img">
                            <img src={imgPlace} alt="" />
                        </div>
                        <div className="text">
                            <h3>광주동구 관광지</h3>
                            <p>
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광
                            </p>
                        </div>
                    </Link>
                    <Link to="/detail" className="item">
                        <div className="img">
                            <img src={imgPlace} alt="" />
                        </div>
                        <div className="text">
                            <h3>광주동구 관광지</h3>
                            <p>
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광
                            </p>
                        </div>
                    </Link>
                    <Link to="/detail" className="item">
                        <div className="img">
                            <img src={imgPlace} alt="" />
                        </div>
                        <div className="text">
                            <h3>광주동구 관광지</h3>
                            <p>
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광
                            </p>
                        </div>
                    </Link>

                    <div className="paging">
                        <button className='first'>
                            <img src={imgFirst} alt="first" />
                        </button>
                        <button className='prev'>
                            <img src={imgPrev} alt="prev" />
                        </button>
                        <div className="num">
                            <button className='active'>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                        </div>
                        <button className='next'>
                            <img src={imgNext} alt="next" />
                        </button>
                        <button className='last'>
                            <img src={imgLast} alt="last" />
                        </button>

                    </div>
                </div>
                <Nav />
            </div>
            <div className="btmBg"></div>
        </div>
    );
}

export default Trip;
