import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

// 최소 반응형 레이아웃: ~767 / 768~1023 / 1024~
// 가로모드 지원 반응형 레이아웃: ~599 / 600~899 / 900~1199 / 1200~1799 / 1800~
// 부트스트랩 반응형 레이아웃: ~575 / 576~767 / 768~991 / 992~1199 / 1200~

const combineStrings = (args, ...keys) => {
  return args.reduce((initialValue, currentValue, currentIndex) => {
    return `${initialValue}${keys[currentIndex - 1]}${currentValue}`;
  });
};

export const mobile = (args, ...keys) => {
  return css`
    @media screen and (max-width: 767px) {
      ${combineStrings(args, ...keys)}
    }
  `;
};

export const tablet = (args, ...keys) => {
  return css`
    @media screen and (max-width: 1023px) {
      ${combineStrings(args, ...keys)}
    }
  `;
};

export const web = (args, ...keys) => {
  return css`
    @media screen and (min-width: 1024px) {
      ${combineStrings(args, ...keys)}
    }
  `;
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
  	font-family: 'Pretendard';
  	font-weight: 900;
  	font-style: normal;
  	font-display: swap;
  	src: local('Pretendard Black'),
  		url('./fonts/woff2/Pretendard-Black.woff2') format('woff2'),
  		url('./fonts/woff/Pretendard-Black.woff') format('woff');
  }
  
  @font-face {
  	font-family: 'Pretendard';
  	font-weight: 800;
  	font-style: normal;
  	font-display: swap;
  	src: local('Pretendard ExtraBold'),
  		url('./fonts/woff2/Pretendard-ExtraBold.woff2') format('woff2'),
  		url('./fonts/woff/Pretendard-ExtraBold.woff') format('woff');
  }
  
  @font-face {
  	font-family: 'Pretendard';
  	font-weight: 700;
  	font-style: normal;
  	font-display: swap;
  	src: local('Pretendard Bold'),
  		url('./fonts/woff2/Pretendard-Bold.woff2') format('woff2'),
  		url('./fonts/woff/Pretendard-Bold.woff') format('woff');
  }
  
  @font-face {
  	font-family: 'Pretendard';
  	font-weight: 600;
  	font-style: normal;
  	font-display: swap;
  	src: local('Pretendard SemiBold'),
  		url('./fonts/woff2/Pretendard-SemiBold.woff2') format('woff2'),
  		url('./fonts/woff/Pretendard-SemiBold.woff') format('woff');
  }
  
  @font-face {
  	font-family: 'Pretendard';
  	font-weight: 500;
  	font-style: normal;
  	font-display: swap;
  	src: local('Pretendard Medium'),
  		url('./fonts/woff2/Pretendard-Medium.woff2') format('woff2'),
  		url('./fonts/woff/Pretendard-Medium.woff') format('woff');
  }
  
  @font-face {
  	font-family: 'Pretendard';
  	font-weight: 400;
  	font-style: normal;
  	font-display: swap;
  	src: local('Pretendard Regular'),
  		url('./fonts/woff2/Pretendard-Regular.woff2') format('woff2'),
  		url('./fonts/woff/Pretendard-Regular.woff') format('woff');
  }
  
  @font-face {
  	font-family: 'Pretendard';
  	font-weight: 300;
  	font-style: normal;
  	font-display: swap;
  	src: local('Pretendard Light'),
  		url('./fonts/woff2/Pretendard-Light.woff2') format('woff2'),
  		url('./fonts/woff/Pretendard-Light.woff') format('woff');
  }
  
  @font-face {
  	font-family: 'Pretendard';
  	font-weight: 200;
  	font-style: normal;
  	font-display: swap;
  	src: local('Pretendard ExtraLight'),
  		url('./fonts/woff2/Pretendard-ExtraLight.woff2') format('woff2'),
  		url('./fonts/woff/Pretendard-ExtraLight.woff') format('woff');
  }
  
  @font-face {
  	font-family: 'Pretendard';
  	font-weight: 100;
  	font-style: normal;
  	font-display: swap;
  	src: local('Pretendard Thin'),
  		url('./fonts/woff2/Pretendard-Thin.woff2') format('woff2'),
  		url('./fonts/woff/Pretendard-Thin.woff') format('woff');
  }

  * {
    box-sizing: border-box;
  }

  html, body, div, button, input, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video { 
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font: inherit;
    font-size: 100%;
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-weight: 400;
  }

  /* html{
    ${web`
      font-size: 16px;
    `}

    ${tablet`
      font-size: 13px;
    `}

    ${mobile`
      font-size: 10px;
    `}
  } */

  body {
    font-size: 1.2rem;
  }

  button {
    border: none;
    padding: 0;
    color: black;
    text-align: center;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default GlobalStyle;
