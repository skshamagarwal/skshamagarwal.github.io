import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #182A22;
    --gray-1: #DFE8D9;
    --deep-dark: #12201A;
    --gray-2: #244B3A;
    --yellow: #F7F4EA;
    --white: #F7F4EA;
    --black: #0A140F;
    --primary: #5F8C6D;
    --primary-light: #8CB397;
    --secondary: #244B3A;
    --secondary-dark: #1A362A;
    --accent: #3E6350;
    --accent-light: #6FA085;
    --success: #5F8C6D;
    --danger: #B5533C;
    --warning: #DFE8D9;
    --info: #5F8C6D;
    --gradient-1: linear-gradient(135deg, #5F8C6D 0%, #244B3A 100%);
    --gradient-2: linear-gradient(135deg, #244B3A 0%, #5F8C6D 100%);
    --gradient-3: linear-gradient(135deg, #5F8C6D 0%, #F7F4EA 100%);
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(95, 140, 109, 0.5), 0 0 20px rgba(95, 140, 109, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(95, 140, 109, 0.8), 0 0 30px rgba(95, 140, 109, 0.5);
    }
  }
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  @keyframes typewriterEffect {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  @keyframes blinkCursor {
    0%, 50% {
      border-right-color: var(--primary);
    }
    51%, 100% {
      border-right-color: transparent;
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  html{
    font-size: 10px;
    font-family: 'RobotoMono Regular';
    background-color: var(--dark-bg);
    scroll-behavior: smooth;
  }
  body {
    background: linear-gradient(135deg, var(--deep-dark) 0%, var(--dark-bg) 100%);
    color: var(--gray-1);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    transition: all 0.3s ease;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
