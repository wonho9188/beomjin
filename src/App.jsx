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
            Smart <div className='sm-break'/> Mobility, 
          </motion.div>
          <motion.div 
            className='main-banner-title-top-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5}}
          >
            Built <div className='sm-break'/> on Teamwork
          </motion.div>
        </div>
        <motion.div 
          className='main-banner-title-bot'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1}}
        >
          <div>똑똑한 프로젝트는 <div className='sm-break'/> 팀워크에서 나옵니다. </div>
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
            BEOMJIN은 팀원들을 챙기고 <br/>
            지식 공유로 협업합니다.
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
              <div>협력과 소통</div>
              <div>
                프로젝트의 안정성을 <br/>
                높이는 협력과 소통을 <br/>
                지향합니다.
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
              협업을 통해 문제를 해결하는 <br/>
              <span>김범진</span>입니다.
            </motion.div>
          </div>
          <motion.div
            className='section2-content-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='tag'> # 협력과 소통 </div>
            <div className='tag'> # 지식 공유 </div>
          </motion.div>
          <motion.div
            className='section2-content-bot'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            저는 <b>협력과 소통</b>을 핵심 가치로 <br/>
            삼는 <u>자율주행 엔지니어</u>입니다.<br/>
            <br/>
            대학 시절 자율주행 동아리에서 <br/>
            다양한 사람들과 함께 복잡한 미션을 <br/>
            해결하며 <u>실전 경험</u>을 쌓았습니다.<br/>
            <br/>
            지속적인 협력과 지식 공유로 <br/>
            팀의 목표를 하나로 맞추었고, <br/>
            그 결과 <u>AutoRace 2024 <br/>
            협의회장상</u>을 수상했습니다.<br/>
            <br/>
            이후 여러 프로젝트와 다양한 팀원들과의<br/>
            <b>협업</b>을 통해 문제 해결 능력을 한층 강화했으며, <br/>
            새로운 조직과 환경에서도 유연한 협력과 <br/>
            원활한 소통으로 안정적이고 스마트한 <br/>
            <b>자율주행 솔루션</b>을 구현하겠습니다.
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
                대림대학교 미래자동차학부 
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
            <div className='item'>
              <div>
                20.01 ~ 21.08
              </div>
              <div>
                수도군단 본부근무대 행정과 회관병 병장 전역
              </div>
            </div>
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
          <div>똑똑한 프로젝트는  <div className='sm-break'> </div>  팀워크에서 나옵니다.</div>
        </motion.div>
        <motion.div 
          className='section6-link'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        >
          <a rel="noopener noreferrer" href='https://open.kakao.com/o/sjE0mzLh' target='_blank'>
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
