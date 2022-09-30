import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2vw 4vw;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .year {
    margin-top: 20px;
    font-weight: 100;
    width: 100%;
  }
`;

export const CompanyHistory = () => {
  return (
    <Container>
      <div>
        <div>PT STUDIO</div>
        <div>좋은습관</div>
        <p className='year'>2017</p>
      </div>
      <div>
        <div className='one-div'>IGA</div>
        <p className='year'>2020</p>
      </div>
      <div>
        <div>씨에치앤</div>
        <div>법인설립</div>
        <p className='year'>2021</p>
      </div>
      <div>
        <div className='one-div'>오늘의습관</div>
        <p className='year'>2022</p>
      </div>
    </Container>
  );
};
