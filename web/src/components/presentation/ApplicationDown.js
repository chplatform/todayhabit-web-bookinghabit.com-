import React from 'react';
import styled from 'styled-components';
import GoogleIcon from '../../assets/images/iconGoogle.png';
import appStoreIcon from '../../assets/images/iconPlayStore.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  justify-content: space-around;
  .icon-container {
    cursor: pointer;
    color: #858585;
    background-color: #ffffff;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    transition: margin 0.5s;
    img {
      width: 30px;
      height: 30px;
      margin-right: 1rem;
    }
  }
  @media screen and (max-width: 800px) {
    width: 100vw;
    .icon-container {
      margin: 0 1rem;
      img {
        width: 15px;
        height: 15px;
        margin-right: 1rem;
      }
    }
  }
`;

function ApplicationDown() {
  return (
    <Container>
      <div
        className='icon-container'
        onClick={() =>
          window.open(
            'https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98%EC%9D%98%EC%8A%B5%EA%B4%80/id1613900785'
          )
        }
      >
        <img src={appStoreIcon} alt='어플오픈예정' />
        <h3>App Store</h3>
      </div>
      <div
        className='icon-container'
        onClick={() =>
          window.open('https://play.google.com/store/apps/details?id=com.chplatform.bookinghabit')
        }
      >
        <img src={GoogleIcon} alt='어플오픈예정' />
        <h3>Google Play</h3>
      </div>
    </Container>
  );
}

export default ApplicationDown;
