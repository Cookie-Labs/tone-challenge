import React from 'react';
import Layout from '../layouts/Layout';
import styled from 'styled-components';
import ConnectWallet from '@articles/ConnectWallet';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MyPage = () => {
  return (
    <Layout>
      <ConnectWallet />
      <Container>MyPage</Container>
    </Layout>
  );
};

export default MyPage;
