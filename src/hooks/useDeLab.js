// eslint-disable-next-line
import { DeLabEvent, DeLabNetwork } from '@delab-team/connect';
import { createElement, useEffect, useState } from 'react';

/**
 * @typedef {import("@delab-team/connect").DeLabNetwork} DeLabNetwork
 * @typedef {import("react").ReactNode} ReactNode
 * @typedef {import("@delab-team/connect").DeLabEvent} DeLabEvent
 * @typedef {import("@delab-team/connect").DeLabConnect} DeLabConnect
 * @typedef {object} ConnectInfo
 * @property {string} url
 * @property {string} name
 * @property {DeLabNetwork} network
 * @typedef {object} Callbacks
 * @property {(event: DeLabEvent) => void} [onConnect]
 * @property {() => void} [onDisconnect]
 * @property {(event: DeLabEvent) => void} [onApproveLink]
 * @property {(event: DeLabEvent) => void} [onError]
 * @property {(event: DeLabEvent) => void} [onErrorTransaction]
 * @property {(event: DeLabEvent) => void} [onErrorTonCoinWallet]
 * @property {(event: DeLabEvent) => void} [onErrorTonhub]
 * @property {(event: DeLabEvent) => void} [onErrorTonkeeper]
 *
 * @param {{ connectInfo: ConnectInfo, callbacks: Callbacks }} props
 * @returns {{ DeLabConnector: DeLabConnect, DeLabModal: ReactNode, DeLabButton: ReactNode }}
 */
export const useDeLab = (props) => {
  const [DeLabConnector, setDeLabConnector] = useState();
  const [DeLabModal, setDeLabModal] = useState(null);
  const [DeLabButton, setDeLabButton] = useState(null);

  useEffect(() => {
    (async () => {
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
    })();
    // eslint-disable-next-line
  }, []);

  return { DeLabConnector, DeLabModal, DeLabButton };
};
