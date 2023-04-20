import React from 'react';
import icoHome from 'img/ico_3d_home.png'
import { Link } from 'react-router-dom';
import sample from 'img/sample1.png'

function Result() {
    return (
        <div className="result">
            <div className="contents">
                <h1 className='tit__big'>나의 여행 스타일은?</h1>
                <div className="content__result">
                    <h2>올해도 수박농사는 거뜬없지!</h2>
                    <div className="imgbox">
                        <img src={sample} alt="" />
                    </div>
                    <h3 className='result-type'>무등산 수박농부</h3>
                    <div className="hashtagbox">
                        <span className="hashtag"># 만능 재주꾼</span>
                        <span className="hashtag"># 창의적</span>
                        <span className="hashtag"># 호기심천국</span>
                    </div>
                    <hr />
                    <h3 className="tit-mark">
                        당신의 유형은?
                    </h3>
                    <p>
                        현실적이지만 대담한 스타일!<br />
                        예기치 못한 상황도 무난히 타파하는 경력직 농부<br /><br />

                        노력파라 자신의 기술을 마음껏 활용하여<br />
                        목표 달성을 이룬다구~<br /><br />

                        효율러라 활동적인 일을 선호하는 타입
                    </p>
                    <h3 className="tit-mark">
                        당신의 여행타입은?
                    </h3>
                    <p>
                        반복되는 일상에 무료함을 느끼고 여행을 떠나는 타입!<br />
                        하지만 여행은 효율적이어야하는 효율러로<br />
                        여행지간 도선을 최소화 시킴!<br /><br />

                        항상 새로운 에너지로 가득<br />
                        철학, 사색, 아이디어에 목마른 걸 달래줄 수 있는<br />
                        여행지였으면 좋겠어~<br /><br />

                        예상치 못한 상황도 무난히 타파할 수 있으니<br />
                        어딜 내놓아도 걱정없는 타입<br />
                        액티비티한 여행지도 즐겁게 놀 수 있는<br />
                        발랄한 여행러
                    </p>

                    <hr />

                    <h3 className='tit-circle green'>추천코스</h3>
                    <h4 className='course-name'>무등산 모노레일</h4>
                    <p className='detail-text'>액티비티한 활동을 즐기는 사람은 지산 유원지로</p>
                    <div className="imgbox">
                        <img src={sample} alt="course" />
                    </div>
                    <p>
                        무등산의 자연을 만끽하고 더불어 액티비티를<br />
                        즐길 수 있는 광주 동구의 핫스팟
                    </p>

                    <div className="course__items">
                        <div className="item">
                            <div className="imgbox">
                                <img src={sample} alt="course" />
                            </div>
                            <h5>남도 관광안내센터</h5>
                        </div>
                        <div className="item">
                            <div className="imgbox">
                                <img src={sample} alt="course" />
                            </div>
                            <h5>무등 현대미술관</h5>
                        </div>
                    </div>
                </div>
                <nav>
                    <Link to="/">
                        <img src={icoHome} alt="home" />
                    </Link>
                    <a href="https://www.donggu.kr/index.es?sid=a9" target="_blank">
                        광주광역시<br />
                        동구 문화관광
                    </a>
                    <Link to="/types">전체유형</Link>
                    <button>한국어</button>
                </nav>
            </div>
        </div>
    );
}

export default Result;
