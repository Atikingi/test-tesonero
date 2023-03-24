import styled, { createGlobalStyle } from 'styled-components';
import { color } from './styles/colors';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const GlobalStyle = createGlobalStyle`
 
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 *:before,
 *:after {
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
 }
 
 button{
   cursor: pointer;
 }

 a, a:visited {
   text-decoration: none;
   cursor: pointer;
 }
 
 html, body {
   width: 100%;
   height: 100%;
 }
 
 #root {
   width: 100%;
   min-height: 100%;
   overflow: hidden;
   overflow-y: scroll;
   background-color: ${color.bgPrimary};
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -ms-flex-direction: column;
   background-color: ${color.bgPrimary};
 }

 .slick-dots li {
   margin: 0 2px;
 }
 
 .slick-dots li.slick-active button:before {
   opacity: 0.75;
   color: #A6ABBD;
 }

 .slick-dots li button:before {
   font-size: 10px;
   color: #E7EBF0;
   opacity: 1;
 }

 .slick-dots li.slick-active button:before {
   background: #ffffff;
 }

 .slick-dots {
   bottom: -60px;
 }
`;

export const App = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.bgPrimary};
`;

export default GlobalStyle;
