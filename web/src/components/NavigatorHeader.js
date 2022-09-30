import styled from 'styled-components';
import React from 'react';
import logo from '../assets/images/osp_logo.png';
import { useScroll } from '../customHooks/UseScroll';
import { useHistory } from 'react-router-dom';

const NavigationHeaderDiv = styled.div`
  z-index: 1000;
  width: 100vw;
  background-color: ${(props) => (props.scrollY > 25 ? '#ffffff' : 'rgba(255, 255, 255, 0.2)')};
  padding: 1rem 15%;
  -webkit-box-shadow: 0px 2px 4px 0 rgb(0 0 0 / 7%);
  -moz-box-shadow: 0px 2px 4px 0 rgb(0 0 0 / 7%);
  box-shadow: 0px 2px 4px 0 rgb(0 0 0 / ${(props) => (props.scrollY > 25 ? '7%' : '0%')});
  transition: all 0.5s;
  position: fixed;
  top: 0;
  ul {
    display: flex;
    position: relative;
    justify-content: center;
    transition: justify-content 0.5s;
  }
  #logo {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    width: 80px;
    height: 20px;
    left: 0;
    img {
      width: inherit;
      height: inherit;
    }
    @media screen and (max-width: 500px) {
      width: 80px;
      height: 20px;
      top: 10px;
    }
  }
  li {
    cursor: pointer;
    div {
      font-size: 0.8rem;
    }
  }
  .menu {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    > li {
      margin: 0 1rem;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 2rem 2%;
    border-bottom-color: rgba(0, 27, 55, 0.1);
    ul {
      justify-content: flex-end;
    }
  }
  @media screen and (max-width: 500px) {
    .menu-text {
      font-size: 1.6rem;
    }
  }
`;

function NavigatorHeader() {
  let navigate = useHistory();
  const { scrollY } = useScroll();
  console.log(scrollY);
  return (
    <NavigationHeaderDiv scrollY={scrollY}>
      <ul>
        <li id='logo' onClick={() => navigate.push('/')}>
          <img src={logo} alt='logo' />
        </li>
        <div className='menu'>
          <li>
            <div className='menu-text' onClick={() => navigate.push('/fee')}>
              요금안내
            </div>
          </li>
          <li>
            <div className='menu-text' onClick={() => navigate.push('/company')}>
              회사소개
            </div>
          </li>
          <li>
            <div
              className='menu-text'
              onClick={() =>
                window.open('https://www.notion.so/onlspgwan/3e1bad17f177450396de40a04a86ec36')
              }
            >
              인재채용
            </div>
          </li>
        </div>
      </ul>
    </NavigationHeaderDiv>
  );
}

export default NavigatorHeader;
