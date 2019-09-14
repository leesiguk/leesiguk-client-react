import React from 'react';
import styled from 'styled-components';

const PrivacyBlock = styled.div`
  padding-top: 64px;
`;

const PrivacyContentBlock = styled.div`
  width: 100%;
  height: auto;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  color: ${props => props.theme.typography.color2};
`;

const Title = styled.h1`
  text-align: center;
`;

const Content = styled.section``;

interface PrivacyProps {}

const Privacy: React.FC<PrivacyProps> = () => {
  return (
    <PrivacyBlock>
      <PrivacyContentBlock>
        <Title>개인정보처리방침</Title>
        <Content>
          <h3>
            이시국닷컴은 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을
            보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록
            다음과 같은 처리방침을 두고 있습니다.
          </h3>
          <h3>1. 수집하는 개인정보의 항목 및 수집방법</h3>
          <h4>가. 수집하는 개인정보의 항목</h4>
          <p>– IP Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록</p>
          <h4>나. 개인정보 수집방법</h4>
          <p>이시국닷컴은 다음과 같은 방법으로 개인정보를 수집합니다.</p>
          <p> – 생성정보 수집 툴을 통한 수집</p>
          <h3>2.개인정보의 수집 및 이용목적</h3>
          <h4>가. 신규 서비스 개발 및 마케팅·광고에의 활용</h4>
          <p>
            신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스
            제공 및 광고 게재, 서비스의 유효성 확인, 이벤트 정보 및 참여기회
            제공, 광고성 정보 제공, 접속빈도 파악, 회원의 서비스이용에 대한 통계
          </p>
          <h3>3.개인정보의 공유 및 제공</h3>
          <p>
            이시국닷컴은 이용자들의 개인정보를 ‘2. 개인정보의 수집목적 및
            이용목적’서 고지한 범위 내에서 사용하며, 이용자의 사전 동의 없이는
            동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에
            공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
          </p>
          <h4>가. 이용자가 사전에 동의한 경우</h4>
          <h4>
            나. 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
            방법에 따라 수사기관의 요구가 있는 경우
          </h4>
          <h3>4.개인정보의 처리위탁</h3>
          <p>
            이시국닷컴은 서비스 이용 및 통계 분석을 목적으로 로그 분석툴인
            Google Analytics 도구를 사용하고 있습니다.
          </p>
          <h3>5. 개인정보의 보유 및 이용기간</h3>
          <p>
            이시국닷컴은 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이
            해당 정보를 지체 없이 파기합니다.
          </p>
          <h3>6. 정보주체의 권리/의무 및 그 행사방법</h3>
          <p>
            이용자 및 법정대리인은 언제든지 등록되어 있는 자신의 개인정보를
            조회하거나 수정할 수 있으며 회원 탈퇴를 요청할 수도 있습니다.
            이용자의 개인정보 조회/수정을 위해서는 회원정보 수정 기능을,회원
            탈퇴(서비스 이용 동의 철회)를 위해서는 이시국닷컴에게 이메일 통지의
            방법 등을 이용할 수 있습니다.
          </p>
          <h3>7. 개인정보관리 책임자 및 담당자</h3>
          <p>
            이시국닷컴은 개인정보에 대한 의견수렴 및 불만처리를 담당하는
            개인정보 관리책임자 및 담당자를 지정하고 있고, 연락처는 아래와
            같습니다.
          </p>
          <p>
            책임자: 강영진 <br />
            담당자: 강영진 <br />
            직위: 운영자 <br />
            이메일: siguklee@gmail.com
          </p>
        </Content>
      </PrivacyContentBlock>
    </PrivacyBlock>
  );
};

export default Privacy;
