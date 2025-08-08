import * as React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion";
import './assets/css/index.scss';

import thesis_img1 from './assets/image/thesis-img1.png';
import thesis_img2 from './assets/image/thesis-img2.png';
import thesis_img3 from './assets/image/thesis-img3.png';

const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);
  const updateScreen = () => {
    setScreenHeight(window.innerHeight)
  }
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  React.useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
      window.addEventListener('resize', updateScreen);
  });
  return (
    <div className={`header ${scrollPosition > 1 ? 'scrolled' : ''}${scrollPosition > screenHeight ? '2' : ''}`}>
      <a href='' className='header-left'>
        <span className='logo-beom'/>
        <span className='logo-jin'/>
      </a>
      <div className='header-right'>
        jbjj0708@naver.com
      </div>
    </div>
  )
}
const MainBanner = () => {
  return (
    <div className='main-banner'>
      <div className='main-banner-title'>
        <div className='main-banner-title-top'>
          <motion.div 
            className='main-banner-title-top-1'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Finding <div className='sm-break'/> Answers,
          </motion.div>
          <motion.div 
            className='main-banner-title-top-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5}}
          >
            Growing <div className='sm-break'/> Beyond
          </motion.div>
        </div>
        <motion.div 
          className='main-banner-title-bot'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1}}
        >
          <div>더 나은 답을 찾고, <div className='sm-break'/> 더 크게 성장합니다. </div>
        </motion.div>
      </div>
    </div>
  )
}

const Section1 = () => {
  return (
    <div className='section1-wrap'>
      <div className='section1'>
        <div className='section1-top'>
          <motion.div
            className='section1-top1'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Mind • Character
          </motion.div>
          <motion.div
            className='section1-top2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            BEOMJIN은 새로운 기술과 문제에 뛰어드는 <br/>
            도전정신으로 더 나은 해답을 찾고 성장합니다.
          </motion.div>
        </div>
        <div className='section1-bot'>
          <motion.div
            className='section1-bot-item'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className='img'/>
            <div>
              <div>문제 해결 능력</div>
              <div>
                끊임없이 탐구하고 <br/>
                마주치는 문제를 <br/>
                해결합니다.
              </div>
            </div>
          </motion.div>
          <motion.div
            className='section1-bot-item'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3}}
          >
            <span className='img'/>
            <div>
              <div>문서 설계</div>
              <div>
                Jira / Confluence로 <br/>
                팀원들과 소통하고 <br/>
                아키텍쳐를 설계합니다.
              </div>
            </div>
          </motion.div>
          <motion.div
            className='section1-bot-item'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6}}
          >
            <span className='img'/>
            <div>
              <div>SW 개발</div>
              <div>
                Python / C++ 을 <br/>
                활용한 서버 구축 및 <br/>
                ROS2 통신을 구현합니다.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const Section2 = () => {
  return (
    <div className='section2-wrap'>
      <div className='section2'>
        <div className='section2-img-bg'>
          <motion.div 
            className='section2-img'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className='section2-content'>
          <div className='section2-content-top'>
            <motion.div
              className='section2-content-top1'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span>About</span> BEOMJIN
            </motion.div>
            <motion.div
              className='section2-content-top2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              더 나은 답을 찾는 개발자 <br/>
              <span>김범진</span>입니다.
            </motion.div>
          </div>
          <motion.div
            className='section2-content-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='tag'> # 끊임없는 도전 </div>
            <div className='tag'> # 매일매일 성장 </div>
          </motion.div>
          <motion.div
            className='section2-content-bot'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            로봇을 연결하는 건 기술, <br/>
            <b>팀을 연결하는 건 소통</b>입니다. <br/>
            <br/>
            <u>센서–제어–내비게이션</u>을 <br/>
            한 흐름으로 잇는 로보틱스 엔지니어. <br/>
            <br/>
            <b>ROS2 · DDS</b>로 신뢰성과 지연을 설계하고, <br/>
            서버에서 GUI까지 매끈하게 연결합니다. <br/>
            <br/>
            빠르게 변하는 <b>LLM·비전 트렌드</b>를 <br/>
            민첩하게 포착해 로봇에 즉시 반영합니다
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const Section3 = () => {
  return (
    <div className='section3-wrap'>
      <div className='section3'>
        <div className='section3-content'>
          <div className='title'>Graduation</div>
          <div className='contents'>
            <div className='item'>
              <div>2025</div>
              <div>
                숙명여자대학교 <br/> 
                경제학부 학사 &  IT공학전공 졸업  <div className='sm-break'> </div> (학점 : 4.1 / 4.5)
              </div>
            </div>
          </div>
        </div>
        <div className='section3-content'>
          <div className='title'>Skills</div>
          <div className='contents'>
            <div className='item'>
              <div>Dev</div>
              <div>ROS2 / Slam & Nav</div>
            </div>
            <div className='item'>
              <div>Dev</div>
              <div>Python / PyQt / C++</div>
            </div>
            <div className='item'>
              <div>Dev</div>
              <div>OpenCV / Matplotlib</div>
            </div>
            <div className='item'>
              <div>Dev</div>
              <div>DB / SQL</div>
            </div>
            <div className='item'>
              <div>Dev</div>
              <div>Vision / Deep Learning</div>
            </div>
            <div className='item'>
              <div>Communication</div>
              <div>Git / Jira / Confluence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const Section4 = () => {
  return (
    <div className='section4-wrap'>
      <div className='section4'>
        <div className='section4-content'>
          <div className='title'>Etc.</div>
          <div className='contents'>
            <div className='item'>
              <div>
                25.02 ~ 25.08
              </div>
              <div>
                에드인에듀 ROS2 9기 국비교육과정 수료
              </div>
            </div>
            {/* 대외활동 */}
            {/* <div className='item'>
              <div>
                20.06 ~ 21.12
              </div>
              <div>
                11사단 108기보 대대 병장 만기 전역
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

const Section5 = () => {
  const [current, setCurrent] = React.useState(1);
  return (
    <div className='section5-wrap'>
      <div className='section5'>
        <div className='section5-top'>
          <div className='section5-top1' >
            Project Highlights
          </div>
          <div className='section5-top2' >
            <div> 
              {
                current == 1 ?
                <>
                  <b> ROS2 프로젝트 </b>
                  <b>- 대형병원 안내 로봇 시스템 </b> 
                </>
                :
                current == 2 ?
                <>
                  <b> Deep Learning 프로젝트  </b>
                  <b>- 무인매장 CCTV 단속 시스템 </b>
                </>
                :
                current == 3 ?
                <>
                  <b> IoT Learning 프로젝트  </b>
                  <b>- 자동 물류 시스템 </b>
                </>
                : <> </>
              }
            </div>
            {
              current == 1 ?
              <div> 관리자 GUI 대쉬보드(실시간 로봇 위치 및 카메라) 화면 </div>
              :
              current == 2 ?
              <div> 매장주인 GUI 통계 시각화 화면 </div>
              :
              current == 3 ?
              <div> 일반인 이해를 위한 간소화 시나리오 PPT </div>
              : <></>
            }
          </div>
        </div>
        <div className='section5-bot'>
          <div 
            onClick={()=>{
              if ( current !== 1 ) {
                setCurrent(current - 1);
              }
            }} 
            className={`arrow-left ${current == 1 ? 'disabled' : ''}`}
          >
            <div/>
          </div>
          <div className='section5-bot-content'>
            <div className={`item ${current == 1 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img1} alt='thesis1'/>
                  </div>
                </div>
              </div>
            </div>
            <div className={`item ${current == 2 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img2} alt='thesis2'/>
                  </div>
                </div>
              </div>
            </div>
            <div className={`item ${current == 3 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img3} alt='thesis3'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onClick={()=>{
            if ( current !== 3 ) {
              setCurrent(current + 1);
            }
          }} className={`arrow-right ${current == 3 ? 'disabled' : ''}`}>
            <div/>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section6 = () => {
  return (
    <div className='section6-wrap'>
      <div className='section6'>
        <motion.div 
          className='section6-content'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>Let’s Work Together</div>
          <div>더 나은 답을 찾고,  <div className='sm-break'> </div>  더 크게 성장합니다.</div>
        </motion.div>
        <motion.div 
          className='section6-link'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        >
          <a rel="noopener noreferrer" href='https://open.kakao.com/o/syIzYmLh' target='_blank'>
            <div className='button'>
              <div>WITH</div>
              <div className='logo'>
                <span className='logo-beom'/>
                <span className='logo-jin'/>
              </div>
              <div className='arrow'/>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='footer'>
      <a href='' className='footer-left'>
        <span className='logo'/>
      </a>
      <div className='footer-right'>
        Tel :  010-9703-4740 <br/>
        Email : jbjj0708@naver.com <br/>
        Copyright 2025. BEONJIN. All rights reserved.
      </div>
    </div>
  )
}
const Main = () => {
  return (
    <div className='main'>
      <Header />
      <MainBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
