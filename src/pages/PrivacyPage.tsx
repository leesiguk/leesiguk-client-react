import React from 'react';
import styled from 'styled-components';
import Privacy from '../components/privacy/Privacy';
import AppBar from '../components/common/AppBar';

const PrivacyPageBlock = styled.div`
  background-color: #282d49;
  width: 100%;
  height: 100%;
`;

const PrivacyPage: React.FC = () => {
  return (
    <PrivacyPageBlock>
      <AppBar />
      <Privacy />
    </PrivacyPageBlock>
  );
};

export default PrivacyPage;
