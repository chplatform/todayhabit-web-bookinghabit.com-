import React from 'react';
import styled from 'styled-components';

const FreeOpenBtn = styled.button`
  font-weight: bold;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  background: var(--today-green);
  color: #ffffff;
  font-size: 16px;
  margin-top: 10vh;
  margin-bottom: 5vh;
`;

function FreeOpenButton() {
  return (
    <FreeOpenBtn onClick={() => window.open('https://admin.bookinghabit.com')}>
      무료 사용
    </FreeOpenBtn>
  );
}

export default FreeOpenButton;
