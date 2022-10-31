import styled from 'styled-components';

// Дальше идут стили
export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 500px;
  background: linear-gradient(
    85.61deg,
    rgba(255, 0, 229, 0.7) 31.42%,
    #4985ff 58.77%
  );

  transition: 0.3s all 0s ease-in-out;

  overflow: hidden;
`;

export const RectangleLeft = styled.div`
  position: absolute;
  width: 969.19px;
  height: 1355.62px;
  left: -560px;
  top: -750px;

  background: linear-gradient(
    41.63deg,
    rgba(0, 102, 255, 0.8) -3.18%,
    rgba(255, 0, 229, 0.5) 49.05%,
    rgba(255, 122, 0, 0.8) 99.56%
  );
  background-blend-mode: darken;
  border-radius: 16px;
  transform: rotate(-43.22deg);

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    left: -750px;
  }

  @media (max-width: 1000px) {
    left: -850px;
  }

  @media (max-width: 600px) {
    left: -950px;
  }

  @media (max-width: 350px) {
    left: -1100px;
  }
`;

export const RectangleRight = styled.div`
  position: absolute;
  width: 969.19px;
  height: 1355.62px;
  left: 1258px;
  top: -113.46px;

  background: linear-gradient(
    41.63deg,
    rgba(0, 102, 255, 0.8) -3.18%,
    rgba(255, 0, 229, 0.5) 49.05%,
    rgba(255, 122, 0, 0.8) 99.56%
  );
  background-blend-mode: darken;
  border-radius: 16px;
  transform: rotate(-215.41deg);

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1600px) {
    left: 1060px;
    transform: rotate(-222deg);
  }

  @media (max-width: 1000px) {
    left: 760px;
  }

  @media (max-width: 600px) {
    left: 550px;
  }

  @media (max-width: 350px) {
    left: 450px;
  }
`;
