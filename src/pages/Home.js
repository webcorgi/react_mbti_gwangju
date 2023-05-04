import Plane from "include/Plane";
import midBg from 'img/mid_bg.png'
import ico3DModeling from 'img/ico_3d_modeling.png'
import imgFirst from 'img/sample1.png'
import imgSecond from 'img/sample2.png'
import imgChart from 'img/chart.png'
import icoIntro from 'img/ico_3d_love.png'
import icoTrip from 'img/ico_3d_backpack.png'
import logo from 'img/logo_symbol.png'
import imgKo from 'img/img_ko.png'
import { Link } from "react-router-dom";
import mbtiMain from 'img/mbti_main.png'
import SelectFlag from "include/SelectFlag";
import ENFJ from 'img/mbti/ENFJ.png'
import ISTJ from 'img/mbti/ISTJ.png'


function Home() {
    return (
        <>
            <Plane />
            <main>
                <div className="wrapper">
                    <div className="visual">
                        <div className="visual__info">
                            <div className="ani-circle"></div>
                            <div className="tit">
                                <h1>광주광역시 동구</h1>
                                <h2>
                                    <span className="underline">여행 스타일</span>
                                    <span>테스트</span>
                                </h2>
                                <p className="subtext">나의 성향에 맞춰 떠나보는 광주 여행!</p>
                                <p className="hashtag">#계획러 #집순이 #미식가</p>
                            </div>
                            <Link to="/test" className="btn big">
                                <span>테스트 시작하기</span>
                            </Link>
                        </div>
                        <div className="visual__image">
                            <img src={mbtiMain} alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className="mid_bg">
                    <img src={midBg} alt="mid_bg" />
                </div> */}

                <div className="main__content wrapper">
                    <div className="content__box">
                        <div className="box__most">
                            <h3 className="tit-mark">
                                <span>가장 많이 나온 유형은 ?</span>
                            </h3>
                            <div className="wrapper__most">
                                <Link to="/result" className="most">
                                    <div className="most__img">
                                        <img src={ENFJ} alt="1위 관광지" />
                                    </div>
                                    <div className="most__text">
                                        <span className="mark">1위</span>
                                        <strong>공룡알빵 제빵사</strong>
                                    </div>
                                </Link>
                                <Link to="/result" className="most">
                                    <div className="most__img">
                                        <img src={ISTJ} alt="2위 관광지" />
                                    </div>
                                    <div className="most__text">
                                        <span className="mark">2위</span>
                                        <strong>헌책방거리 점원</strong>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="box__chart">
                            <h3 className="tit-mark">
                                <span>응시자</span>
                                <b>32,608명</b>
                            </h3>
                            <div className="chart__box">
                                <div id="chart">
                                    <img src={imgChart} alt="chart" style={{ width: '139px' }} />
                                </div>
                                <ul className="chart__list">
                                    <li>
                                        <div className="dot dot1"></div>
                                        <div className="percent">38%</div>
                                        <p>공룡알빵 제빵사</p>
                                    </li>
                                    <li>
                                        <div className="dot dot2"></div>
                                        <div className="percent">22%</div>
                                        <p>헌책방거리 점원</p>
                                    </li>
                                    <li>
                                        <div className="dot dot3"></div>
                                        <div className="percent">16%</div>
                                        <p>무등산 수박농부</p>
                                    </li>
                                    <li>
                                        <div className="dot dot4"></div>
                                        <div className="percent">13%</div>
                                        <p>광주 100만 유투버</p>
                                    </li>
                                </ul>
                            </div>
                            <Link to="/types" className="btn">
                                <span>전체 MBTI 유형 보기</span>
                            </Link>
                        </div>
                    </div>
                    <div className="content__box2">
                        <Link to="/intro" className="btn_intro">
                            <img src={icoIntro} alt="intro" />
                            <p>
                                <span>광주광역시 동구</span>
                                <b>여행 스타일이란?</b>
                            </p>
                        </Link>
                        <Link to="/trip" className="btn_trip">
                            <img src={icoTrip} alt="trip" />
                            <p>
                                <span>유형별</span>
                                <b>추천여행</b>
                            </p>
                        </Link>
                        <a href="https://www.donggu.kr/index.es?sid=a9" target="_blank" className="btn_gwangju">
                            <img src={logo} alt="logo" />
                            <p>
                                <span>광주광역시 동구</span>
                                <b>문화관광</b>
                            </p>
                        </a>
                        <div className="btn_lang">
                            <SelectFlag type={'main'} />
                        </div>
                    </div>
                </div>
                <div className="btmBg"></div>
            </main>
        </>
    );
}
export default Home;