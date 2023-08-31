import React from 'react';
import styled from 'styled-components';
import { LAYOUT_WIDTH, FOOTER_HEIGHT } from './layoutConst';
import { useNavigate } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai';

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.lightModeColor.gray13};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, 0);
  width: ${LAYOUT_WIDTH};
  height: ${FOOTER_HEIGHT};
  z-index: 10;
  padding: 0 2rem;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavButton = styled.button`
  cursor: pointer;
  width: auto;
  height: auto;
  color: ${({ theme }) => theme.lightModeColor.white};

  &:hover {
    color: ${({ theme }) => theme.lightModeColor.gray10};
    transition: 0.3s;
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <ButtonsWrapper>
        <NavButton
          onClick={() => {
            navigate('/');
          }}
        >
          <AiOutlineHome size="30" />
        </NavButton>
        <NavButton
          onClick={() => {
            navigate('/create');
          }}
        >
          <AiOutlinePlusCircle size="30" />
        </NavButton>
        <NavButton
          onClick={() => {
            navigate('/search');
          }}
        >
          <AiOutlineSearch size="30" />
        </NavButton>
        <NavButton
          onClick={() => {
            navigate('/my');
          }}
        >
          <AiOutlineUser size="30" />
        </NavButton>
      </ButtonsWrapper>
    </FooterContainer>
  );
};

export default Footer;
