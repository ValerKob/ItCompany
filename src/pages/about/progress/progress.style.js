import styled from 'styled-components';
import { Typography } from '@mui/material';

// Дальше идут стили
export const Wrapper = styled.div`
  max-width: 1920px;
  padding: 0 150px 0 0;

  @media (max-width: 1200px) {
    padding: 0 0 0 0;
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

export const Laptop = styled.img`
  width: 600px;
  height: 500px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1620px) {
    width: 500px;
    height: 400px;
    margin: 0 0 0 50px;
  }

  @media (max-width: 1300px) {
    width: 400px;
    height: 300px;
    margin: 50px 0 0 25px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 200px;
    margin: 0 0 0 25px;
  }

  @media (max-width: 370px) {
    width: 220px;
    height: 120px;
    margin: 0 0 0 25px;
  }
`;

export const LaptopShad = styled.img`
  width: 650px;
  height: 400px;
  margin-top: -80px;
  margin-left: 80px;
  margin: -80px 0 0;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1620px) {
    margin: -100px 0 0 50px;
    width: 500px;
    height: 350px;
  }

  @media (max-width: 1300px) {
    width: 400px;
    height: 250px;
    margin: -70px 0 0 25px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 200px;
    margin: -50px 0 0 25px;
  }

  @media (max-width: 370px) {
    width: 200px;
    height: 100px;
    margin: -25px 0 0 25px;
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 300px;

  background: linear-gradient(
    99.01deg,
    #0066ff -10.93%,
    rgba(255, 0, 229, 0.7) 48.76%,
    #ff7a00 106.02%
  );
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export const SliderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SliderButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 178px;
`;

export const ButtonOne = styled.div`
  width: 75px;
  height: 27px;
  left: 1011px;
  top: 2560px;

  background: ${({ open }) => (open ? '#f6f6f8' : '#4985ff')};
  border-radius: 16px;
`;

export const ButtonTwo = styled.div`
  width: 75px;
  height: 27px;
  left: 1104px;
  top: 2560px;

  background: ${({ open }) => (open ? '#4985ff' : '#f6f6f8')};
  border-radius: 16px;
`;

export const SliderContentOne = styled.div`
  display: ${({ open }) => (open ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;

export const SliderContentTwo = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const SliderImg = styled.img`
  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;

export const SliderText = styled.div`
  font-weight: 600;
  font-size: 46px;
  line-height: 60px;
  text-align: center;

  color: #ffffff;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;
