import { createGlobalStyle } from 'styled-components';
import NicoMoji from '../assets/fonts/NicoMoji-Regular.ttf';
// 리셋 스타일
const ResetStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
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
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const FontStyles = createGlobalStyle`
@font-face{
  font-family:'NicoMoji';
  font-style:normal;
  src: url(${NicoMoji}) format("truetype");
  font-weight: 700;
  font-display: swap; 
}
`;

const GlobalStyles = createGlobalStyle`
html, body{
    font-family: 'Pretendard';
    font-weight: 400;
    color: var(--black-fontColor);
    height: 100%;
  }

  div{
    font-size: 15px;
    line-height: 150%;
    text-align: start;
  }
`;

export { ResetStyles, FontStyles, GlobalStyles };
