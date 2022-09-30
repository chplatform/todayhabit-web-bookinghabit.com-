import styled from 'styled-components';
import React from 'react';

const LayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 280px;
    width: 100%;
    transition: width 0.5s;
    overflow: hidden;
  }
  @media screen and (max-width: 800px) {
    > div {
      width: 100vw;
    }
  }

  @media screen and (max-width: 500px) {
    > div {
      width: 100vw;
    }
  }
`;

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
