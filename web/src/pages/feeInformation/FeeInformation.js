import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FeeTable } from './FeeTable';

const Container = styled.div`
  .summery {
    margin-top: 30vh;
    margin-bottom: 1vh;
  }
  .precautions {
    margin: 5vh 0;
  }
`;

const ToggleContainer = styled.div`
  width: ${(props) => props.summeryWidth};
  padding: 0.5rem;
  border-radius: 50px;
  border: 1px solid var(--today-green);
  display: flex;
  margin: 10vh 0;
  transition: width 0.5s;
  > div {
    flex: 1;
    border-radius: 50px;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
  }
  .on {
    background-color: var(--today-green);
    color: #ffffff;
    transition: all 0.3s ease;
  }
  .off {
    background-color: #ffffff;

    color: var(--today-green);
  }
`;

function FeeInformation() {
  const toggleEl = useRef(null);
  const [ToggleContainerWidth, setWidth] = useState(0);
  const [toggleActive, setActive] = useState(true);

  const handleResize = () => {
    setWidth(document.querySelector('.summery').clientWidth.toString() + 'px');
  };

  useEffect(() => {
    setWidth(document.querySelector('.summery').clientWidth.toString() + 'px');

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <div className='summery animate__animated animate__fadeInDown' ref={toggleEl}>
        <p>50인 이하는</p>
        <p>모든 기능을 무료로 사용가능합니다</p>
        <h1>예약습관, 오늘의습관</h1>
      </div>
      <ToggleContainer summeryWidth={ToggleContainerWidth}>
        <div className={toggleActive ? 'on' : 'off'} onClick={() => setActive(true)}>
          <h4 style={{ 'font-weight': '300' }}>비예약제</h4>
          <h4>Basic</h4>
        </div>
        <div className={toggleActive ? 'off' : 'on'} onClick={() => setActive(false)}>
          <h4 style={{ 'font-weight': '300' }}>예약제</h4>
          <h4>Pro</h4>
        </div>
      </ToggleContainer>
      <FeeTable type={toggleActive ? '비예약제' : '예약제'} />
      <p className='precautions'>*이용 금액은 모두 VAT 별도 이용료입니다.</p>
    </Container>
  );
}
export default FeeInformation;
