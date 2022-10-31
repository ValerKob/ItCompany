import styled from 'styled-components';
import { Grid } from '@mui/material';

// Дальше идут стили
export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 320px 120px 0 0;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 600px) {
    margin: 320px 20px 0;
  }
`;

export const Union = styled.img`
  @media (max-width: 1860px) {
    width: 700px;
    height: 550px;
  }

  @media (max-width: 1500px) {
    width: 600px;
    height: 450px;
  }

  @media (max-width: 1200px) {
    transform: rotate(90deg);
  }

  @media (max-width: 600px) {
    width: 450px;
    height: 350px;
  }

  @media (max-width: 400px) {
    width: 400px;
    height: 270px;
  }
`;

export const Info = styled.div`
  position: absolute;
  width: 500px;
  top: 60px;
  left: 100px;
  right: 50px;

  @media (max-width: 1860px) {
    left: 50px;
  }

  @media (max-width: 1500px) {
    width: 450px;
    left: 30px;
  }

  @media (max-width: 1200px) {
    width: 400px;
    top: 0;
    left: 50px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 300px;
  }

  @media (max-width: 400px) {
    left: 0;
    width: 250px;
  }
`;

export const Titel = styled.div`
  text-align: center;

  margin-bottom: 40px;
  font-weight: 600;
  font-size: 56px;
  line-height: 68px;

  color: #ffffff;

  @media (max-width: 1500px) {
    font-size: 50px;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 48px;
    margin-bottom: 10px;
  }

  @media (max-width: 400px) {
    font-size: 26px;
    line-height: 30px;
  }
`;

export const Text = styled.div`
  text-align: justify;
  margin-bottom: 30px;
  text-indent: 40px;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;

  color: #ffffff;

  @media (max-width: 1500px) {
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 15px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
    line-height: 25px;
  }
`;

export const Content = styled.div``;

export const GridOne = styled(Grid)`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const ButtonActive = styled.div`
  width: 100px;
  height: 25px;
  left: 238px;
  top: 2060px;

  background: #4985ff;
  border-radius: 13px;
`;

export const Button = styled(ButtonActive)`
  background: #d9d9d9;
  margin-left: 40px;
`;

export const Png = styled.img`
  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 400px) {
    width: 270px;
    height: 270px;
  }
`;
