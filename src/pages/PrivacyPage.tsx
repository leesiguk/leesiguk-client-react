import React from 'react';
import styled from 'styled-components';
import Privacy from '../components/privacy/Privacy';
import AppBar from '../components/common/AppBar';
import { Helmet } from 'react-helmet';

const PrivacyPageBlock = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  width: 100%;
  height: 100%;
`;

const PrivacyPage: React.FC = () => {
  return (
    <PrivacyPageBlock>
      <Helmet>
        <title>개인정보처리방침 - 이시국닷컴</title>
        <meta name="description" content="개인정보처리방침 - 이시국닷컴" />
        <meta name="og:description" content="개인정보처리방침 - 이시국닷컴" />
        <meta name="og:title" content="개인정보처리방침 - 이시국닷컴" />
        <meta name="og:url" content="https://www.leesiguk.com/privacy" />
      </Helmet>
      <AppBar />
      <Privacy />
    </PrivacyPageBlock>
  );
};

export default PrivacyPage;
