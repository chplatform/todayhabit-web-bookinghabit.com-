import React, { useEffect } from 'react';
import styled from 'styled-components';
import ApplicationDown from './presentation/ApplicationDown';
import { footerH2Width } from '../store';
import { useSetRecoilState } from 'recoil';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--today-green);
  color: var(--page-background-color);
  min-height: 300px;
  width: 100vw;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 500px) {
    min-height: 20vh;
  }
`;

const AppDownloadSection = () => {
  const SetWidth = useSetRecoilState(footerH2Width);

  useEffect(() => {
    let titleEl = document.querySelector('.download-info-title');
    SetWidth(titleEl.getBoundingClientRect().width);
    console.log(titleEl.getBoundingClientRect().width);
  }, []);

  return (
    <AppContainer>
      <h2 className='download-info-title'>회원 전용 앱으로 편리하게 예약해보세요!</h2>
      <ApplicationDown />
    </AppContainer>
  );
};

export default AppDownloadSection;
