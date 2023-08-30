import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '@articles/ScrollToTop';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

export const ToastStyleContainer = styled(ToastContainer)`
  .Toastify__toast {
    color: white;
    font-size: 1rem;
    border-radius: 0.625rem;
    padding: 1rem 1.5rem;
    background: rgba(107, 115, 135, 0.8);
  }
  .Toastify__toast--info {
    background: rgba(107, 115, 135, 0.8);
  }
  .Toastify__toast--success {
    background: rgba(48, 173, 120, 0.8);
  }
  .Toastify__toast--error {
    background: rgba(224, 72, 82, 0.8);
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
    <ToastStyleContainer theme="light" />
  </RecoilRoot>,
);
