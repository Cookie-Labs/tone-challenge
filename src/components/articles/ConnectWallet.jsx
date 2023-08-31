import { useState } from 'react';
import { useDeLab } from '@hooks/useDeLab';
import styled from 'styled-components';
import { formatAddress } from '@utils/parser';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack, BiWalletAlt, BiX } from 'react-icons/bi';
import { useRecoilState } from 'recoil';
import {
  userAccount,
  userNetworkType,
} from '@states/userState';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const BackButton = styled.button`
  cursor: pointer;
  width: auto;
  height: auto;
`;

const ConnectedButton = styled.button`
  cursor: pointer;
  width: 154.6px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.5rem;
  background-color: ${({ theme }) => theme.lightModeColor.white};
  color: ${({ theme }) => theme.lightModeColor.black};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border: none;
  border-radius: 0.625rem;
`;

const InfoWrapper = styled.div`
  width: auto;
  height: 44px;
  padding: 0rem 0.5rem;
  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.lightModeColor.gray06};
  color: ${({ theme }) => theme.lightModeColor.white};
  background-color: ${({ theme }) => theme.lightModeColor.gray15};
  font-size: ${({ theme }) => theme.fontSize.base};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  z-index: 101;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const ModalContentWrapper = styled.div`
  width: 360px;
  height: auto;
  border: 1px solid ${({ theme }) => theme.lightModeColor.gray09};
  background-color: ${({ theme }) => theme.lightModeColor.gray15};
  padding: 0.8rem 1.8rem 1.8rem 1.8rem;
  border-radius: 1.25rem;
  overflow: hidden;
  outline: none;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const ModalContentTitleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.lightModeColor.white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin-bottom: 2rem;
`;

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.lightModeColor.gray13};
  color: ${({ theme }) => theme.lightModeColor.white};

  &:hover {
    background-color: ${({ theme }) => theme.lightModeColor.gray12};
    transition: 0.3s;
  }
`;

const DisconnectButton = styled.div`
  cursor: pointer;
  width: auto;
  height: 60px;
  padding: 0.5rem 1rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.lightModeColor.gray13};
  color: ${({ theme }) => theme.lightModeColor.white};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.lightModeColor.gray12};
    transition: 0.3s;
  }
`;

export default function Home() {
  const navigate = useNavigate();
  const [account, setAccount] = useRecoilState(userAccount);
  const [networkType, setNetworkType] = useRecoilState(userNetworkType);

  const [isConnected, setIsConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { DeLabConnector, DeLabModal, DeLabButton } = useDeLab({
    connectInfo: {
      url: 'https://example.com',
      name: 'Example',
      network: 'testnet',
    },
    callbacks: {
      onConnect: async (event) => handleConnect(event),
      onDisconnect: () => handleDisconnect(),
      onErrorTransaction: (event) => handleErrorTransaction(event),
      // ... other callbacks handled in our hook
    },
  });

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleClickConnected = () => {
    setShowModal(!showModal);
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) handleClickConnected();
  };

  const handleConnect = async (event) => {
    setIsConnected(true);
    setAccount(event.data.address);
    setNetworkType(event.data.network);
    sessionStorage.setItem('_user', event.data.address);
    sessionStorage.setItem('_networkType', event.data.network);
  };

  const handleDisconnect = async () => {
    console.log('disconnect');
  };

  const handleErrorTransaction = async (event) => {
    console.log('error transaction', event.data);
  };

  const triggerDisconnect = async () => {
    await DeLabConnector.disconnect();
    setIsConnected(false);
    setAccount('');
    setNetworkType('');
    sessionStorage.removeItem('_user');
    sessionStorage.removeItem('_networkType');
  };

  return (
    <Container>
      <BackButton onClick={handleBackButton}>
        <BiArrowBack color="white" size="25" />
      </BackButton>
      {DeLabModal}
      {isConnected ? (
        <>
          <InfoWrapper>{networkType}</InfoWrapper>
          <ConnectedButton onClick={handleClickConnected}>
            <BiWalletAlt size="25" />
            {formatAddress(account)}
          </ConnectedButton>
          <ModalContainer show={showModal} onMouseDown={handleClickOutside}>
            <ModalContentWrapper>
              <ModalContentTitleWrapper>
                {formatAddress(account)}
                <CloseButton onClick={handleClickConnected}>
                  <BiX />
                </CloseButton>
              </ModalContentTitleWrapper>
              <DisconnectButton onClick={triggerDisconnect}>
                Disconnect
              </DisconnectButton>
            </ModalContentWrapper>
          </ModalContainer>
        </>
      ) : (
        DeLabButton
      )}
    </Container>
  );
}
