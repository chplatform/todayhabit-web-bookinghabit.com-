import React from 'react';
import styled, { keyframes } from 'styled-components';
import FreeOpenButton from '../components/presentation/FreeOpenButton';
import phonePic from '../assets/images/phone.png';
import webPic from '../assets/images/web_monitor.png';
import useScrollFadeIn from '../customHooks/useScrollFadeIn';

const Container = styled.div`
  .home-p-1 {
    margin-top: 25vh;
    margin-bottom: 1vh;
  }
  .block {
    width: 100%;
    height: 100vh;
    opacity: 0.3;
    background-color: #ffffff;
    position: absolute;
    z-index: 10;
  }
  section {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('https://modo-phinf.pstatic.net/20211206_58/1638779855380TUNlw_GIF/mosalX9r7e.gif');
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    > * {
      z-index: 100;
    }
    h1 {
      font-size: 3.5rem;
      color: #ffffff;
      font-weight: 500;
    }
    p {
      font-size: 1.5rem;
      color: #ffffff;
      font-weight: 500;
    }
  }
  img {
    object-fit: cover;
  }
  .web-in-summery {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .web-container {
    width: 100%;
    margin-bottom: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .pic-div {
      width: 45vw;
      margin-left: 2rem;
      background: #ffffff;
      margin-top: 3vh;

      img {
        border-radius: 20px;
        box-shadow: 0 4px 15px 7px rgb(0 0 0 / 15%);
      }
    }
  }
  @media screen and (max-width: 1000px) {
    img {
      border-radius: 50px;
    }
    .web-in-summery {
      margin-bottom: 30rem;
    }
    .web-container {
      .pic-div {
        margin: 0;
        position: absolute;
        margin-top: 30rem;
        width: 90vw;
        @media not all and (min-resolution: 0.001dpcm) {
          @supports (-webkit-appearance: none) {
            margin-top: 15rem;
          }
        }
        img {
          border-radius: 20px;
          box-shadow: 0 4px 15px 7px rgb(0 0 0 / 15%);
        }
      }
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 500px) {
    .web-container .pic-div {
      margin-top: 40rem;
    }
  }
`;
const Subscribe = styled.div`
  .pic-div {
    margin-top: 3vh;
    border-radius: 20px;
    img {
      border-radius: 20px;
      box-shadow: 0 4px 15px 7px rgb(0 0 0 / 15%);
    }
  }
  margin-top: 15vh;
  > div {
    margin-bottom: 40vh;
  }
  > h2,
  > p {
    margin-left: 1vw;
  }
  > h2 {
    margin-bottom: 3vh;
  }
  @media screen and (max-width: 500px) {
    > h2,
    > p {
      margin-left: 5vw;
    }
  }
`;
const bounceAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: matrix(1, 0, 0, 1, 0, 25);
  }
`;

const DownIcon = styled.div`
  width: 25px;
  height: 25px;
  perspective: 100px;
  margin-top: 15vh;
  -webkit-animation: ${bounceAnimation} 1.5s infinite;
  animation: ${bounceAnimation} 1.5s infinite;
  svg {
    transform: matrix(1, 0, 0, 1, 0, 50);
    -webkit-transform: matrix(1, 0, 0, 1, 0, 50);
    width: 100%;
    height: 100%;
    transform: translate3d(0px, 0px, 0px);
    fill: #ffffff;
    opacity: 0.6;
  }
  @media screen and (max-width: 500px) {
    margin-top: 30vh;
  }
`;
function Home() {
  return (
    <Container>
      <section className='section-1'>
        <p className='home-p-1 animate__animated animate__fadeInDown'>
          오늘의 건강한 라이프를 위한 간편한 서비스
        </p>
        <h1 className='animate__animated animate__fadeInDown'>예약습관, 오늘의 습관</h1>
        <FreeOpenButton />
        <p>저렴하고 쉬운 고객관리 프로그램을</p>
        <p>무료로 사용해보세요.</p>
        <DownIcon>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
            <path d='M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z' />
          </svg>
        </DownIcon>
        <div className='block'></div>
      </section>

      <Subscribe>
        <h2 style={{ margin: '1rem 0 ' }} {...useScrollFadeIn('right', 1)}>
          쉽고, 편리하게
        </h2>
        <p {...useScrollFadeIn('right', 1)}>파트너사는 예약, 매출, 현황을</p>
        <p {...useScrollFadeIn('right', 1)}>쉽고 빠르게 관리할 수 있습니다.</p>
        <div {...useScrollFadeIn('up', 1)} className='pic-div'>
          <img src={phonePic} style={{ height: '75vh' }} alt='logo' />
        </div>
      </Subscribe>

      <div style={{ display: 'flex', 'align-items': 'center' }} className='web-container'>
        <div className='web-in-summery'>
          <h2>무료로 체험하고</h2>
          <h2 style={{ 'margin-bottom': '3vh' }}>저렴한 가격으로</h2>
          <p>모든 기능을</p>
          <p>50인 이하의 신규, 소규모</p>
          <p>지점에 무료로 제공합니다.</p>
          <FreeOpenButton />
        </div>
        <div {...useScrollFadeIn('left', 1)} className='pic-div'>
          <img src={webPic} alt='logo' />
        </div>
      </div>
    </Container>
  );
}

export default Home;
