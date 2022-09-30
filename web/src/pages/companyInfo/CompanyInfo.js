import React from 'react';
import styled from 'styled-components';
import { useScroll } from '../../customHooks/UseScroll';
import { CompanyProduct } from './CompanyProduct';
import { CompanyHistory } from './CompanyHistory';

const Container = styled.div`
  width: 70% !important;
  .company-name {
    margin: 10vh 0;
    color: var(--page--gray-color);
  }
  .boll {
    transition: left 0.6s ease;
    position: relative;
    left: ${(props) => Number(props.scrollValue) * 0.18 * 1}%;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--today-green);
  }
`;

const ProgressBar = styled.div`
  padding: 5px 4vw;
  width: 100%;
  border-radius: 100px;
  border: 1px solid rgba(112, 112, 112, 1);
  height: 35px;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

function CompanyInfo() {
  const { scrollY } = useScroll();

  return (
    <Container scrollValue={scrollY}>
      <h1 className='animate__animated animate__fadeInDown' style={{ 'margin-top': '30vh' }}>
        습관을 만드는
      </h1>
      <h1 className='animate__animated animate__fadeInDown'>라이프스타일 서비스</h1>
      <div className='company-name animate__animated animate__fadeInDown'>주식회사 씨에치앤</div>
      <ProgressBar>
        <div className='boll'></div>
      </ProgressBar>
      <CompanyHistory />
      <CompanyProduct />
    </Container>
  );
}

export default CompanyInfo;
