import { Typography } from '@mui/material';
import styled from 'styled-components';

// Дальше идут стили
export const Wrapper = styled.div`
  max-width: 1920px;
  position: relative;

  margin: 500px 0 0 0;
  overflow: hidden;

  transition: 0.3s all 0s ease-in-out;
`;

export const RectangleRight = styled.div`
  position: absolute;
  width: 553px;
  height: 450px;
  left: -20px;
  top: 260px;

  background: linear-gradient(
    41.63deg,
    rgba(0, 102, 255, 0.8) -3.18%,
    rgba(255, 0, 229, 0.5) 49.05%,
    rgba(255, 122, 0, 0.8) 99.56%
  );
  background-blend-mode: darken;
  border-radius: 16px;
  z-index: -10;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1535px) {
    left: -100px;
    top: 135px;
  }

  @media (max-width: 1200px) {
    left: -300px;
  }

  @media (max-width: 800px) {
    left: -400px;
  }

  @media (max-width: 500px) {
    left: -1000px;
  }
`;

export const TypographyNew = styled(Typography)`
  && {
    position: relative;
    font-weight: 700;
    font-size: 64px;

    background: linear-gradient(
      85.61deg,
      rgba(255, 0, 229, 0.7) 31.42%,
      #4985ff 58.77%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    margin-bottom: 30px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 100%;
      left: 50%;
      width: 200px;
      height: 3px;

      transform: translateX(-50%);

      background: #d9d9d9;
    }

    @media (max-width: 1535px) {
      font-size: 52px;
    }
  }
`;
