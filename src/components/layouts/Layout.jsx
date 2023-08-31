import React from 'react';
import styled from 'styled-components';
import { LAYOUT_WIDTH, FOOTER_HEIGHT } from './layoutConst';
import Footer from './Footer';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LayoutWrapper = styled.div`
  width: ${LAYOUT_WIDTH};
  min-height: calc(100vh - ${FOOTER_HEIGHT});
  overflow: hidden;
  background-color: ${({ theme }) => theme.lightModeColor.gray13};
  padding: 2rem;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
