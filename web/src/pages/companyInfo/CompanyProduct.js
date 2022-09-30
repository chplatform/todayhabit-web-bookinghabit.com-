import React from 'react';
import styled from 'styled-components';
import GoodHabitLogo from '../../assets/images/logo.png';
import TodayHabitLogo from '../../assets/images/store_icon.png';
import IGALogo from '../../assets/images/IGA_logo.png';
import useScrollFadeIn from '../../customHooks/useScrollFadeIn';

const LinkSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10vh auto;
  .image-inherit-div {
    width: 150px;
    height: 150px;
  }

  .image-container {
    width: 20%;
    margin: 4vh 0;
  }
  .company-summery {
    width: 60%;
    margin: 4vh 0;
    .title {
      font-size: 1.5rem;
    }
    .sub-title {
      font-size: 1.1rem;
    }
    .sub-title p:first-child {
      color: blue;
    }
    .mb {
      margin-bottom: 3vh;
    }
    .mt {
      margin-top: 3vh;
    }
    > button {
      font-size: 0.8rem;
      background: none;
      padding: 1rem;
      border: 1px solid rgba(112, 112, 112, 1);
      border-radius: 20px;
      color: var(--page--gray-color);
    }
    > button:hover {
      border: 1px solid white;
      border-radius: 20px;
      background-color: var(--today-green);
      color: white;
    }
  }
  * {
    white-space: normal;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .company-summery {
      text-align: center;
    }
    .image-container {
      width: auto;
      margin-bottom: 1vh;
    }
  }
`;

export const CompanyProduct = () => {
  return (
    <>
      <LinkSection>
        <div className='image-container'>
          <div className='image-inherit-div'>
            <img src={GoodHabitLogo} alt='logo'></img>
          </div>
        </div>

        <div className='company-summery'>
          <div className='title'>수도권 누적회원 10,000명이 선택한</div>
          <div className='title mb'>쉽고 재밌는 소그룹 PT 서비스, 좋은습관 PT STUDIO</div>

          <p className='sub-title'>
            수도권 30여개 지점을 보유하고 있으며, 유효회원은 매년 500%이상의 성장세를
          </p>
          <p className='sub-title'>
            보이고 있습니다. 현대인의 바쁜 라이프스타일에 최적화된 서비스를 제공합니다.
          </p>
          <button
            className='mt'
            onClick={() => window.open('https://ptghabit.modoo.at/?link=elhlnkn9')}
          >
            우리동네에서 가장 가까운 좋은습관은?
          </button>
        </div>
      </LinkSection>
      <LinkSection {...useScrollFadeIn('down', 0.8)}>
        <div className='image-container'>
          <div className='image-inherit-div iga'>
            <img src={IGALogo} alt='logo'></img>
          </div>
        </div>

        <div className='company-summery'>
          <div className='title'>라이프스타일 메이커를 만드는</div>
          <div className='title mb'>아카데미의 메카, IGA</div>

          <p className='sub-title'>
            {'지금 시대에 적합한 코칭서비스를 위한 인재를 양성을 위한 아카데미입니다.'}
          </p>
          <p className='sub-title '>
            어려운 코칭만큼 CS와 실질적인 업무를 위한 교육커리큘럼을 준비했습니다!
          </p>
          <button className='mt' onClick={() => window.open('https://iga2020.modoo.at/')}>
            코치가 되는 빠르고 전문적인 아카데미 IGA 보러가기
          </button>
        </div>
      </LinkSection>
      <LinkSection {...useScrollFadeIn('down', 0.8)}>
        <div className='image-container'>
          <div className='image-inherit-div'>
            <img src={TodayHabitLogo} alt='logo'></img>
          </div>
        </div>

        <div className='company-summery'>
          <div className='title'>오늘의 건강한 라이프스타일을 위한</div>
          <div className='title mb'>예약서비스, 오늘의습관</div>

          <p className='sub-title'>운동하기 위해 예약 버튼을 누르는 당신! 쉽고 편리한</p>
          <p className='sub-title'>당신의 습관을 만들어주는 오늘의습관과 함께 해보세요.</p>
          <button
            className='mt'
            onClick={() => window.open('https://admin.bookinghabit.com/register')}
          >
            오늘의습관 무료사용하기
          </button>
        </div>
      </LinkSection>
    </>
  );
};
