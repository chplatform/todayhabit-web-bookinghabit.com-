import React from 'react';
import styled from 'styled-components';

export const Container = styled.section`
  text-align: start !important;
  width: 100vw !important;
  padding: 1rem 15%;
  transition: padding 0.5s;
  * {
    white-space: normal;
  }
  .title {
    margin-top: 5vw;
  }
  .chapter-1-list {
  }
  .chapter-2-list {
    > li {
      list-style: disc;
      list-style-position: inside;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 1.5rem 2%;
  }
`;

function PI() {
  return (
    <Container>
      <h1 className='title'>개인정보 처리방침</h1>
      <br />
      <p>
        (유)씨에이치앤플랫폼은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와
        관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
        수립·공개합니다. 이 개인정보처리방침은 2022년 2월 1부터 적용됩니다.
      </p>

      <br />
      <h4>제1조(개인정보의 처리 목적)</h4>
      <h4>
        {
          '(유)씨에이치앤플랫폼(이하 “오늘의습관“)은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.'
        }
      </h4>
      <br />
      <ul className='chapter-1-list'>
        <li>
          <p>1. 홈페이지 회원가입 및 관리</p>
          <br />
          <p>서비스 부정이용 방지 목적으로 개인정보를 처리합니다.</p>
          <br />
        </li>
        <li>
          <p>2. 민원사무 처리</p>
          <br />
          <p>사실조사를 위한 연락·통지 목적으로 개인정보를 처리합니다.</p>
          <br />
        </li>
        <li>
          <p>3. 재화 또는 서비스 제공</p>
          <br />
          <p>서비스 제공을 목적으로 개인정보를 처리합니다.</p>
          <br />
        </li>
        <li>
          <p>4. 마케팅 및 광고에의 활용</p>
          <br />
          <p>신규 서비스(제품) 개발 및 맞춤 서비스 제공 등을 목적으로 개인정보를 처리합니다.</p>
          <br />
        </li>
        <li>
          <p>5. 개인영상정보</p>
          <br />
          <p>범죄의 예방 및 수사 등을 목적으로 개인정보를 처리합니다.</p>
          <br />
          <br />
        </li>
      </ul>
      <h4>제2조(개인정보의 처리 및 보유 기간)</h4>
      <h4>
        {
          '① 오늘의습관은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.'
        }
      </h4>
      <h4>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</h4>
      <br />
      <ul className='chapter-2-list'>
        <li>{'<홈페이지 회원가입 및 관리>'}</li>
        <li>
          {
            '<홈페이지 회원가입 및 관리>와 관련한 개인정보는 수집.이용에 관한 동의일로부터<10년>까지 위 이용목적을 위하여 보유.이용됩니다.'
          }
        </li>
        <li>보유근거 : 홈페이지 개인정보 처리방침</li>
        <ul>
          <li>관련법령 : 1)신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년</li>
          <li>2) 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li>
          <li></li>
          <li>3) 대금결제 및 재화 등의 공급에 관한 기록 : 5년</li>
          <li>4) 계약 또는 청약철회 등에 관한 기록 : 5년</li>
        </ul>
      </ul>
      <br />
      <br />
      <h4>제3조(개인정보의 제3자 제공)</h4>
      <h4>
        {
          '① 오늘의습관은(는) 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.'
        }
      </h4>
      <h4>{'② 오늘의습관은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.'}</h4>
      <br />
      <ul className='chapter-2-list'>
        <li>{'1. < >'}</li>
        <li>{'위탁받는 자 (수탁자) :'}</li>
        <li>{'위탁하는 업무의 내용 :'}</li>
        <li>{'위탁기간 :'}</li>
      </ul>
      <br></br>
      <h4>제4조(개인정보처리 위탁)</h4>
      <h4>
        {
          '① 오늘의습관은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.'
        }
      </h4>
      <ul className='chapter-2-list'>
        <li>{'1. < >'}</li>
        <li>{'위탁받는 자 (수탁자) :'}</li>
        <li>{'위탁하는 업무의 내용 :'}</li>
        <li>{'위탁기간 :'}</li>
      </ul>
      <br />
      <h4>
        {
          '② 오늘의습관은(는) 위탁계약 체결시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.'
        }
      </h4>
      <h4>
        ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여
        공개하도록 하겠습니다.
      </h4>
      <br />
      <br />
      <h4>제5조(정보주체와 법정대리인의 권리·의무 및 그 행사방법)</h4>

      <h4>
        ① 정보주체는 오늘의습관에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를
        행사할 수 있습니다.
      </h4>
      <h4>
        ② 제1항에 따른 권리 행사는 오늘의습관에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라
        서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 오늘의습관은 이에 대해 지체 없이
        조치하겠습니다
      </h4>
      <h4>
        ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실
        수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른
        위임장을 제출하셔야 합니다.
      </h4>
      <h4>
        ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여
        정보주체의 권리가 제한 될 수 있습니다.
      </h4>
      <h4>
        ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는
        경우에는 그 삭제를 요구할 수 없습니다.
      </h4>
      <h4>
        ⑥ 오늘의습관은 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람
        등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
      </h4>

      <br />
      <br />
      <h4>제6조(처리하는 개인정보의 항목 작성)</h4>
      <h4>{'① 오늘의습관은 다음의 개인정보 항목을 처리하고 있습니다.'}</h4>
      <ul className='chapter-2-list'>
        <li>{'< 홈페이지 회원가입 및 관리 >'}</li>
        <li>
          {
            '필수항목 : 이메일, 휴대전화번호, 자택주소, 비밀번호, 로그인ID, 성별, 생년월일, 이름, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 결제기록'
          }
        </li>
        <li>{'선택항목 :'}</li>
      </ul>
      <br />
      <br />
      <h4>제7조(개인정보의 파기)</h4>
      <h4>
        {
          '① 오늘의습관은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.'
        }
      </h4>
      <h4>
        {
          '② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.'
        }
      </h4>
      <p>보존하는 개인정보 항목 : 계좌정보, 거래날짜'</p>
      <h4>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</h4>
      <p>
        {
          '1. 파기절차 "오늘의습관" 은(는) 파기 사유가 발생한 개인정보를 선정하고, "오늘의습관" 의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.'
        }
      </p>
      <p>2. 파기방법 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다</p>
      <br />
      <br />
      <h4>제8조(개인정보의 안전성 확보 조치)</h4>
      <h4>{'오늘의습관은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.'}</h4>
      <p>
        1. 개인정보 취급 직원의 최소화 및 교육 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜
        최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.
      </p>
      <p>
        2. 내부관리계획의 수립 및 시행 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고
        시행하고 있습니다.
      </p>
      <p>
        3. 개인정보의 암호화 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어,
        본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을
        사용하는 등의 별도 보안기능을 사용하고 있습니다.
      </p>
      <p>
        4. 문서보안을 위한 잠금장치 사용 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는
        안전한 장소에 보관하고 있습니다.
      </p>
      <br />
      <br />
      <h4>제9조(개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항)</h4>
      <h4>
        ① 오늘의습관은 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로
        불러오는 ‘쿠키(cookie)’를 사용합니다.
      </h4>
      <h4>
        ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(https)가 이용자의 컴퓨터 브라우저에게 보내는
        소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
      </h4>
      <p>
        가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기
        검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
      </p>
      <p>
        {
          '나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.'
        }
      </p>
      <p>다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</p>
      <br />
      <br />
      <h4>제10조 (개인정보 보호책임자)</h4>
      <ul className='chapter-2-list'>
        <li>{'▶ 개인정보 보호책임자'}</li>
        <li>{'성명 : 이성훈'}</li>
        <li>{'직책 : 사업부 PM'}</li>
        <li>{'직급 : 팀장'}</li>
        <li>{'연락처 : 010-4556-7810, office@bookinghabit.com'}</li>
        <br />
        <p>※ 개인정보 보호 담당부서로 연결됩니다.</p>
        <li>{'▶ 개인정보 보호책임자'}</li>
        <li>{'성명 : 이성훈'}</li>
        <li>{'직책 : 사업부 PM'}</li>
        <li>{'직급 : 팀장'}</li>
        <li>{'연락처 : 010-4556-7810, office@bookinghabit.com'}</li>
      </ul>
      <br />
      <h4>
        정보주체께서는 오늘의습관의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련
        문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수
        있습니다. 오늘의습관은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
      </h4>

      <br />
      <br />
      <h4>제12조(국내대리인의 지정)</h4>
      <h4>
        {
          '정보주체는 ｢개인정보 보호법｣ 제39조의11에 따라 지정된 오늘의습관의 국내대리인에게 개인정보 관련 고충처리 등의 업무를 위하여 연락을 취할 수 있습니다. 오늘의습관은 정보주체의 개인정보 관련 고충처리 등 개인정보 보호책임자의 업무 등을 신속하게 처리할 수 있도록 노력하겠습니다.'
        }
      </h4>
      <br />
      <p>{'오늘의습관은 ｢개인정보 보호법｣ 제39조의11에 따라 국내대리인을 지정하였습니다.'}</p>
      <h4>- 국내대리인의 성명 : [대리인 성명_직접입력] (법인의 경우 법인명, 대표자의 성명)</h4>
      <h4>- 국내대리인의 주소 : [대리인 주소_직접입력] (법인의 경우 영업소 소재지)</h4>
      <h4>- 국내대리인의 전화번호 : [대리인 전화번호_직접입력]</h4>
      <h4>- 국내대리인의 전자우편 주소 : [대리인 전자우편_직접입력]</h4>
      <br />
      <br />
      <h4>제13조(추가적인 이용·제공 판단기준)</h4>
      <h4>
        {
          '오늘의습관은 ｢개인정보 보호법｣ 제15조제3항 및 제17조제4항에 따라 ｢개인정보 보호법 시행령｣ 제14조의2에 따른 사항을 고려하여 정보주체의 동의 없이 개인정보를 추가적으로 이용·제공할 수 있습니다.이에 따라 오늘의습관이 정보주체의 동의 없이 추가적인 이용·제공을 하기 위해서 다음과 같은 사항을 고려하였습니다.'
        }
      </h4>
      <br />
      <h4>▶ 개인정보를 추가적으로 이용·제공하려는 목적이 당초 수집 목적과 관련성이 있는지 여부</h4>
      <br />
      <h4>
        ▶ 개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때 추가적인 이용·제공에 대한 예측
        가능성이 있는지 여부
      </h4>
      <br />
      <h4>▶ 개인정보의 추가적인 이용·제공이 정보주체의 이익을 부당하게 침해하는지 여부</h4>
      <br />
      <h4>▶ 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지 여부</h4>
      <br />
      <h4>
        ※ 추가적인 이용·제공 시 고려사항에 대한 판단기준은 사업자/단체 스스로 자율적으로 판단하여
        작성·공개함
      </h4>
      <br />
      <br />
      <h4>제14조(개인정보 열람청구)</h4>
      <h4>
        정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수
        있습니다.
      </h4>
      <h4>{'오늘의습관은 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.'}</h4>
      <br />
      <ul className='chapter-2-list'>
        <li>{'개인정보 보호책임자'}</li>
        <li>{'성명 : 이성훈'}</li>
        <li>{'직책 : 사업부 PM'}</li>
        <li>{'직급 : 팀장'}</li>
        <li>{'연락처 : 010-4556-7810, office@bookinghabit.com'}</li>
      </ul>
      <br />
      <br />
      <h4>제15조(권익침해 구제방법)</h4>
      <h4>
        정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원
        개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타
        개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
      </h4>
      <br />
      <h4>1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)</h4>
      <h4>2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</h4>
      <h4>4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)</h4>
      <br></br>
      <h4>
        「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의
        처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여
        권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수
        있습니다.
      </h4>
      <br />
      <h4>
        ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기
        바랍니다.
      </h4>
      <br />
    </Container>
  );
}

export default PI;
