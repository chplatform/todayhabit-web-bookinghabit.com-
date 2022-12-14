import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FeeTypeSelection } from './FeeTypeSelection';

const FeeTableContainer = styled.div`
  width: 100%;
  padding: 0 15%;
  .mr {
    margin-right: 0.8rem;
  }
  .ml {
    margin-left: 0.8rem;
  }
  > column {
    display: flex;
    > div:first-child {
      flex: 2;
    }
    > div:not(div:first-child) {
      flex: 1;
    }

    > div > * {
      margin-bottom: 0.8rem;
      padding: 1rem 1.5rem;
      background-color: rgba(248, 248, 248, 1);
    }
    /* > div > *:first-child {
      background-color: #ffffff;
    } */
  }
  .body-box > *:not(h4) {
    padding: 0.5rem 0;
  }
  .body-box > h4 {
    padding: 0.7rem 0;
  }
  .triangle {
    width: 0px;
    height: 0px;
    border-bottom: calc(5px * 1.732) solid #858585;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    margin-right: 0.3rem;
    margin-top: 1px;

    transition: all 0.3s;
  }
  .fee-select-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    height: 2rem;
    background-color: #ffffff;
    border: 1px solid rgba(112, 112, 112, 1);
    border-radius: 10px;
    > div {
      display: flex;
    }
    div:first-child {
      align-items: center;
    }
  }
  .select-items {
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid rgba(112, 112, 112, 1);
    padding: 0.5rem;
    z-index: 10;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 20%);
    transition: height 0.5s;
    ul {
      width: 100%;
      font-size: 0.8rem;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
      div {
        width: 40%;
      }
      small {
        color: #c4c4c4;
      }
      h4 {
        width: 40%;
      }
    }
    li:hover {
      background-color: rgba(248, 248, 248, 1);
    }
  }
  .Pro-Trial {
    .select-items {
      display: none;
    }
    .triangle {
      display: none;
    }
  }
  .passive {
    .select-items {
      opacity: 0;
    }
    .triangle {
      transform: rotate(90deg);
    }
  }
  .active {
    .select-items {
      opacity: 1;
    }

    .triangle {
      transform: rotate(180deg);
    }
  }
  @media screen and (max-width: 1100px) {
    padding: 0 5%;
    .select-items {
      width: 150%;
      left: 25%;
    }
  }
`;
export const FeeTable = ({ type }) => {
  const [selectBox1Active, setSelect1Active] = useState(false);
  const [selectBox2Active, setSelect2Active] = useState(false);
  const toggleEl = useRef(null);

  const handleClickOutside = (e) => {
    if (
      selectBox2Active ||
      selectBox1Active ||
      (selectBox2Active && !toggleEl.current.contains(e.target))
    ) {
      setSelect1Active(false);
      setSelect2Active(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <FeeTableContainer>
      {type === '????????????' && (
        <column>
          <div className='mr'>
            <div className='fee-select-box' style={{ border: 'none' }}></div>
            <div>
              <thead>?????????</thead>
            </div>
            <div className='body-box'>
              <h4>????????? ??????</h4>
              <div>??????</div>
              <div>?????? ?????????</div>
              <div>??????????????? ????????????</div>
            </div>
            <div className='body-box'>
              <h4>?????? ??????(???)</h4>
              <div>??? ??????</div>
              <div>????????? ?????? ??????</div>
              <div>?????? ?????? ??????</div>
              <div>?????? ?????? ??????</div>
              <div>?????? ?????? ??????</div>
            </div>
          </div>
          <div className='mr'>
            <div
              className={selectBox1Active ? 'fee-select-box active' : 'fee-select-box passive'}
              onClick={() => setSelect1Active(!selectBox1Active)}
              ref={toggleEl}
            >
              <div>
                <div className='triangle'></div>
                <div>Essential</div>
              </div>
              <div>
                <div>??? 9,900???</div>
              </div>
              <div className='select-items mr'>
                <FeeTypeSelection FeeType='Basic-Essential' />
              </div>
            </div>
            <div>
              <thead>?????????</thead>
            </div>
            <div className='body-box'>
              <h4>&nbsp;</h4>
              <div>-</div>
              <div>-</div>
              <div>-</div>
            </div>
            <div className='body-box'>
              <h4>&nbsp;</h4>
              <div>-</div>
              <div>-</div>
              <div>-</div>
              <div>-</div>
              <div>-</div>
            </div>
          </div>
          <div className='mr'>
            <div
              className={selectBox2Active ? 'fee-select-box active' : 'fee-select-box passive'}
              onClick={() => setSelect2Active(!selectBox2Active)}
            >
              <div>
                <div className='triangle'></div>
                <div>Standard</div>
              </div>
              <div>
                <div>??? 27,000???</div>
              </div>
              <div className='select-items mr'>
                <FeeTypeSelection FeeType='Basic-standard' />
              </div>
            </div>
            <div>
              <thead>?????????</thead>
            </div>
            <div className='body-box'>
              <h4>&nbsp;</h4>
              <div>???</div>
              <div>???</div>
              <div>???</div>
            </div>
            <div className='body-box'>
              <h4>&nbsp;</h4>
              <div>???</div>
              <div>???</div>
              <div>???</div>
              <div>???</div>
              <div>???</div>
            </div>
          </div>
        </column>
      )}
      {type === '?????????' && (
        <column>
          <div className='mr'>
            <div className='fee-select-box' style={{ border: 'none' }}></div>
            <div>
              <thead>?????????</thead>
            </div>
            <div className='body-box'>
              <h4>????????? ??????</h4>
              <div>????????? ?????????/????????????</div>
              <div>?????? ??????/??????/?????? ?????????</div>
            </div>
            <div className='body-box'>
              <h4>?????? ??????(???)</h4>
              <div>????????? ??????</div>
              <div>?????? ??????/??????</div>
              <div>??????/???????????? ?????? ?????? ??????</div>
              <div>?????? ?????? ?????? ??????</div>
            </div>
          </div>
          <div className='mr'>
            <div
              className={selectBox1Active ? 'fee-select-box active' : 'fee-select-box passive'}
              onClick={() => setSelect1Active(!selectBox1Active)}
              ref={toggleEl}
            >
              <div>
                <div className='triangle'></div>
                <div>Pro</div>
              </div>
              <div>
                <div>??? 49,900???</div>
              </div>
              <div className='select-items mr'>
                <FeeTypeSelection FeeType='Pro-Pro' />
              </div>
            </div>
            <div>
              <thead>?????????</thead>
            </div>
            <div className='body-box'>
              <h4>&nbsp;</h4>
              <div>???</div>
              <div>???</div>
            </div>
            <div className='body-box'>
              <h4>&nbsp;</h4>
              <div>???</div>
              <div>???</div>
              <div>???</div>
              <div>???</div>
            </div>
          </div>
          <div className='mr'>
            <div
              className={selectBox2Active ? 'fee-select-box Pro-Trial' : 'fee-select-box Pro-Trial'}
              onClick={() => setSelect2Active(!selectBox2Active)}
            >
              <div>
                <div className='triangle'></div>
                <div>Trial</div>
              </div>
              <div>
                <div>??????</div>
              </div>
              <div className='select-items mr'>
                <FeeTypeSelection FeeType='Pro-Trial' />
              </div>
            </div>
            <div>
              <thead>50??? ??????</thead>
            </div>
            <div className='body-box'>
              <h4>&nbsp;</h4>
              <div>???</div>
              <div>???</div>
            </div>
            <div className='body-box'>
              <h4>&nbsp;</h4>
              <div>???</div>
              <div>???</div>
              <div>???</div>
              <div>???</div>
            </div>
          </div>
        </column>
      )}
    </FeeTableContainer>
  );
};
