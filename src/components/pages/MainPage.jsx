import React from 'react';
import Layout from '../layouts/Layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ConnectWallet from '@articles/ConnectWallet';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const EventContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const EventWrapper = styled.button`
  cursor: pointer;
  width: 100%;
  height: 10rem;
  border: 1px solid ${({ theme }) => theme.lightModeColor.gray09};
  background-color: ${({ theme }) => theme.lightModeColor.gray15};
  color: ${({ theme }) => theme.lightModeColor.white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.lightModeColor.gray14};
    color: ${({ theme }) => theme.lightModeColor.white};
    transition: 0.3s;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <ConnectWallet/>
      <Container>
        <EventContainer>
          <EventWrapper
            onClick={() => {
              navigate('/exercise');
            }}
          >
            Exercise
          </EventWrapper>
          <EventWrapper
            onClick={() => {
              navigate('/eating-habits');
            }}
          >
            Eating Habits
          </EventWrapper>
          <EventWrapper
            onClick={() => {
              navigate('/life');
            }}
          >
            Life
          </EventWrapper>
          <EventWrapper
            onClick={() => {
              navigate('/emotions');
            }}
          >
            Emotions
          </EventWrapper>
          <EventWrapper
            onClick={() => {
              navigate('/hobbies');
            }}
          >
            Hobbies
          </EventWrapper>
          <EventWrapper
            onClick={() => {
              navigate('/environment');
            }}
          >
            Environment
          </EventWrapper>
        </EventContainer>
      </Container>
    </Layout>
  );
};

export default MainPage;
