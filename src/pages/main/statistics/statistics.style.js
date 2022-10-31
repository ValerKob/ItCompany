import styled from 'styled-components';

// Дальше идут стили
export const Container = styled.div`
  max-width: 1680px;
  min-height: 300px;
  margin: 0 auto;
  background: linear-gradient(
    267.97deg,
    #ff7a00 -9.99%,
    rgba(255, 0, 229, 0.7) 51.56%,
    #0066ff 107.29%
  );
  box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);
  border-radius: 16px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1530px) {
    margin: 0 120px;
  }

  @media (max-width: 1000px) {
    margin: 100px 40px;
  }

  @media (max-width: 900px) {
    margin: 100px 40px;
    background: linear-gradient(
      176.79deg,
      #4985ff -5.08%,
      #4985ff -5.07%,
      rgba(255, 0, 229, 0.7) 51.77%,
      #ff7a00 106.29%
    );
  }

  @media (max-width: 850px) {
    margin: 100px 20px;
  }
`;
