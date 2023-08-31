import React from 'react';
import Layout from '../layouts/Layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const HomeButton = styled.button`
  cursor: pointer;
  width: auto;
  height: auto;
  padding: 1rem 0.5rem;
  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.lightModeColor.gray10};
  color: ${({ theme }) => theme.lightModeColor.black};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.lightModeColor.gray12};
    color: ${({ theme }) => theme.lightModeColor.white};
    transition: 0.3s;
  }
`;

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container>
        Page not found.
        <HomeButton
          onClick={() => {
            navigate('/');
          }}
        >
          Back to Home
        </HomeButton>
      </Container>
    </Layout>
  );
};

export default Page404;
