import { createElement, useEffect, useState } from 'react';

export const useDeLab = (props) => {
  const [DeLabConnector, setDeLabConnector] = useState();
  const [DeLabModal, setDeLabModal] = useState(null);
  const [DeLabButton, setDeLabButton] = useState(null);

  useEffect(() => {
    async function setDeLab() {
      if (typeof window !== 'undefined') {
        const DeLab = await import('@delab-team/connect');
        const DeLabConnector = new DeLab.DeLabConnect(
          props.connectInfo.url,
          props.connectInfo.name,
          props.connectInfo.network,
        );
        setDeLabConnector(DeLabConnector);
        setDeLabModal(
          createElement(DeLab.DeLabModal, {
            DeLabConnectObject: DeLabConnector,
            scheme: 'dark',
          }),
        );

        setDeLabButton(
          createElement(DeLab.DeLabButton, {
            DeLabConnectObject: DeLabConnector,
            scheme: 'dark',
          }),
        );

        DeLabConnector.on('connect', async (event) =>
          props.callbacks.onConnect?.(event),
        );

        DeLabConnector.on('disconnect', () => {
          props.callbacks.onDisconnect?.();
        });

        DeLabConnector.on('approve-link', (event) => {
          props.callbacks.onApproveLink?.(event);
        });

        DeLabConnector.on('error', (event) => {
          props.callbacks.onError?.(event);
        });

        DeLabConnector.on('error-transaction', (event) => {
          props.callbacks.onErrorTransaction?.(event);
        });

        DeLabConnector.on('error-toncoinwallet', (event) => {
          props.callbacks.onErrorTonCoinWallet?.(event);
        });

        DeLabConnector.on('error-tonhub', (event) => {
          props.callbacks.onErrorTonhub?.(event);
        });

        DeLabConnector.on('error-tonkeeper', (event) => {
          props.callbacks.onErrorTonkeeper?.(event);
        });

        DeLabConnector.loadWallet();
      }
    }

    setDeLab();
    // eslint-disable-next-line
  }, []);

  return { DeLabConnector, DeLabModal, DeLabButton };
};
