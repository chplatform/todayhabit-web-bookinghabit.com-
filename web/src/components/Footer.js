import React from 'react';
import styled from 'styled-components';
import { footerH2Width } from '../store';
import { useRecoilValue } from 'recoil';

const FooterContainer = styled.div`
  text-align: left;
  padding: 1rem 5%;
  width: 100%;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  p,
  div:not(.company-name) {
    color: #858585;
  }

  .links {
    > p:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  > h3 {
    margin-bottom: 3vw;
  }
  * {
    font-size: 1em;
    white-space: normal;
  }
  .bar {
    background: rgba(59, 72, 89, 0.2);
    width: 1px;
    height: 10px;
    display: inline-block;
    line-height: 10px;
    margin: 0 6px;
    vertical-align: baseline;
  }
  .company-name {
    h3 {
      font-size: 1rem;
    }
  }
  .company-service {
    span {
      font-size: 1rem;
      @media (hover) {
        &:hover {
          color: #c4c4c4;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (min-width: 800px) {
    padding: 2rem 5%;
    .info {
      width: 50%;
    }
    .company-name {
      width: 30%;
    }
    .links {
      width: 20%;
      text-align: end;
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: inherit;
    padding: 3vh 2rem;
    font-size: 0.6rem;
    .company-name {
      margin-bottom: 2vw;
    }
    .bar {
      height: 5px;
    }
  }
  .copyright {
    color: #c4c4c4;
  }
`;

const Footer = () => {
  const appContainerH2Width = useRecoilValue(footerH2Width);

  return (
    <FooterContainer width={appContainerH2Width}>
      <div className='company-name'>
        <h3>(유)씨에이치앤플랫폼</h3>
        <p>오늘의습관</p>
        <p className='copyright'>Copyright ⓒ 2022. CH&Platform., Ltd. All rights reserved.</p>
      </div>

      <div className='info' style={{ 'margin-bottom': '2vw' }}>
        <p>
          사업장 주소 : 17006 경기도 용인시 기흥구 동백중앙로 191, 8층 씨8220호(중동, 씨티프라자)
        </p>
        사업자 등록번호 : 291-87-02624
        <span className='bar'></span>
        법인 등록번호 : 134515-0001501
        <span className='bar'></span>
        대표 : 박창환
        <p>문의 : hello@bookinghabit.com</p>
      </div>
      <div className='links'>
        <p onClick={() => window.location.replace('/Tos')}>서비스 이용약관</p>
        <p onClick={() => window.location.replace('/PI')}>개인정보 처리방침</p>
        <div className='company-service'>
          <span onClick={() => window.open('https://ptghabit.modoo.at/')}>좋은습관 PT STUDIO</span>
          <span className='bar'></span>
          <span onClick={() => window.open('https://iga2020.modoo.at/')}>IGA</span>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
