import React from 'react';
export const FeeTypeSelection = ({ FeeType }) => {
  switch (FeeType) {
    case 'Basic-Essential':
      return (
        <ul>
          <li>
            <div>1년 결제</div>
            <small>-30%</small>
            <h4>월 9,000원</h4>
          </li>
          <li>
            <div>6개월 결제</div>
            <small>-20%</small>
            <h4>월 11,360원</h4>
          </li>
          <li>
            <div>3개월 결제</div>
            <small>-10%</small>
            <h4>월 12,780원</h4>
          </li>
          <li>
            <div>1개월 결제</div>
            <small>&nbsp;</small>
            <h4>월 14,200원</h4>
          </li>
        </ul>
      );
    case 'Basic-standard':
      return (
        <ul>
          <li>
            <div>1년 결제</div>
            <small>-30%</small>
            <h4>월 27,000원</h4>
          </li>
          <li>
            <div>6개월 결제</div>
            <small>-20%</small>
            <h4>월 30,880원</h4>
          </li>
          <li>
            <div>3개월 결제</div>
            <small>-10%</small>
            <h4>월 34,740원</h4>
          </li>
          <li>
            <div>1개월 결제</div>
            <small>&nbsp;</small>
            <h4>월 38,600원</h4>
          </li>
        </ul>
      );
    case 'Pro-Pro':
      return (
        <ul>
          <li>
            <div>1년 결제</div>
            <small>-30%</small>
            <h4>월 49,900원</h4>
          </li>
          <li>
            <div>6개월 결제</div>
            <small>-20%</small>
            <h4>월 57,320원</h4>
          </li>
          <li>
            <div>3개월 결제</div>
            <small>-10%</small>
            <h4>월 64,161원</h4>
          </li>
          <li>
            <div>1개월 결제</div>
            <small>&nbsp;</small>
            <h4>월 71,290원</h4>
          </li>
        </ul>
      );
    case 'Pro-Trial':
      return '';
  }
};
