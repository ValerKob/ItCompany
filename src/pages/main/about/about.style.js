import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Дальше идут стили
export const Wrapper = styled.div`
  max-width: 1680px;
  z-index: -5;

  margin: 1080px 120px 0;
  height: 1080px;

  overflow-x: hidden;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    margin: 1050px 120px 0;
    height: 900px;
  }

  @media (max-width: 1200px) {
    margin: 870px 120px 0;
    height: 800px;
  }

  @media (max-width: 1100px) {
    margin: 770px 40px 0;
    height: 700px;
  }

  @media (max-width: 1000px) {
    height: 600px;
  }

  @media (max-width: 850px) {
    margin: 800px 20px 0;
  }

  @media (max-width: 750px) {
    height: 900px;
  }

  @media (max-width: 550px) {
    margin: 850px 20px 0;
    height: 890px;
  }
`;
export const Row = styled.div`
  margin-top: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 900px) {
    justify-content: space-around;
  }

  @media (max-width: 750px) {
    margin-top: 310px;
  }
`;

export const ColOne = styled.div`
  position: relative;
  width: 730px;
  height: 800px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    width: 630px;
    height: 700px;
  }

  @media (max-width: 1500px) {
    width: 500px;
    height: 600px;
  }

  @media (max-width: 1300px) {
    width: 400px;
    height: 500px;
  }

  @media (max-width: 1100px) {
    height: 450px;
  }

  @media (max-width: 900px) {
    width: 350px;
    height: 400px;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const AboutImg = styled.img`
  object-fit: cover;
  width: 600px;
  height: 800px;

  transition: 0.3s all 0s ease-in-out;

  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  @media (max-width: 1750px) {
    width: 500px;
    height: 700px;
  }

  @media (max-width: 1500px) {
    width: 400px;
    height: 600px;
  }

  @media (max-width: 1300px) {
    height: 500px;
  }

  @media (max-width: 1100px) {
    width: 350px;
    height: 450px;
  }

  @media (max-width: 900px) {
    width: 300px;
    height: 400px;
  }

  @media (max-width: 450px) {
    width: 250px;
    height: 350px;
  }

  @media (max-width: 330px) {
    width: 200px;
    height: 300px;
  }
`;

export const Content = styled.div`
  position: absolute;
  right: 0;
  bottom: 50px;

  padding: 20px 30px 30px 30px;

  width: 250px;
  height: 250px;

  transition: 0.3s all 0s ease-in-out;

  background-color: #fff;
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  @media (max-width: 1750px) {
    padding: 15px 25px 25px 25px;

    width: 200px;
    height: 200px;
  }

  @media (max-width: 1500px) {
    padding: 10px 20px 20px 20px;

    width: 170px;
    height: 170px;
  }

  @media (max-width: 1300px) {
    width: 150px;
    height: 150px;
    right: -50px;
  }

  @media (max-width: 1100px) {
    width: 130px;
    height: 130px;
    right: 0;
  }

  @media (max-width: 900px) {
    bottom: 35px;
  }

  @media (max-width: 750px) {
    position: absolute;
    display: block;

    bottom: -40px;
    right: 30px;

    padding: 10px 15px 15px 15px;

    width: 160px;
    height: 160px;
  }

  @media (max-width: 450px) {
    bottom: -10px;
    right: 50px;

    padding: 10px 15px 15px 15px;

    width: 130px;
    height: 130px;
  }

  @media (max-width: 330px) {
    width: 100px;
    height: 100px;
  }
`;

export const Text = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 200%;
  width: 100%;

  color: #656565;

  margin-left: ${({ open }) => (open ? '-100px' : '0px')};
  opacity: ${({ open }) => (open ? '0' : '1')};

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    font-size: 18px;
    line-height: 180%;
  }

  @media (max-width: 1500px) {
    font-size: 16px;
    line-height: 150%;
  }

  @media (max-width: 1300px) {
    font-size: 14px;
  }

  @media (max-width: 1100px) {
    font-size: 12px;
  }

  @media (max-width: 750px) {
    font-size: 14px;
    line-height: 160%;
  }

  @media (max-width: 450px) {
    font-size: 12px;
  }

  @media (max-width: 330px) {
    font-size: 9px;
  }
`;
export const TitleNone = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  font-weight: 600;
  font-size: 20px;
  line-height: 200%;

  margin-left: ${({ open }) => (open ? '0' : '-100px')};
  opacity: ${({ open }) => (open ? '1' : '0')};

  color: #656565;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    font-size: 18px;
    line-height: 180%;
  }

  @media (max-width: 1500px) {
    font-size: 16px;
    line-height: 150%;
  }

  @media (max-width: 1300px) {
    font-size: 14px;
  }

  @media (max-width: 1100px) {
    font-size: 12px;
  }

  @media (max-width: 750px) {
    font-size: 14px;
    line-height: 160%;
  }

  @media (max-width: 450px) {
    font-size: 12px;
  }

  @media (max-width: 330px) {
    font-size: 9px;
  }
`;

export const Buttons = styled.div``;

export const ButtonOne = styled.div`
  position: absolute;

  bottom: 30px;
  left: 30px;

  width: 60px;
  height: 15px;

  background: ${({ open }) => (open ? '#DEDEDE' : '#4985FF')};
  border-radius: 10px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    left: 20px;
  }

  @media (max-width: 1300px) {
    width: 45px;
  }

  @media (max-width: 750px) {
    width: 40px;
  }

  @media (max-width: 450px) {
    bottom: 20px;

    width: 30px;
  }

  @media (max-width: 330px) {
    bottom: 15px;
    left: 15px;

    width: 25px;
  }
`;

export const ButtonTwo = styled(ButtonOne)`
  left: 120px;

  background: ${({ open }) => (open ? '#4985FF' : '#DEDEDE')};

  @media (max-width: 1500px) {
    left: 100px;
  }

  @media (max-width: 1300px) {
    left: 85px;
  }

  @media (max-width: 750px) {
    left: 80px;
  }

  @media (max-width: 330px) {
    left: 55px;
  }
`;

export const ColTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 700px;
  height: 500px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    width: 600px;
    height: 400px;
  }

  @media (max-width: 1500px) {
    width: 500px;
    height: 300px;
  }

  @media (max-width: 1300px) {
    width: 400px;
  }

  @media (max-width: 900px) {
    width: 300px;
    height: 200px;
  }
`;

export const TitleTwo = styled.div`
  position: relative;
  width: 179px;
  height: 50px;

  font-weight: 600;
  font-size: 52px;
  line-height: 50px;
  margin: 0 0 60px 0;

  background: linear-gradient(
    83.1deg,
    #4985ff 28.7%,
    rgba(255, 0, 229, 0.7) 88.79%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  transition: 0.3s all 0s ease-in-out;

  &::before {
    content: '';
    display: block;
    position: absolute;

    top: 100%;
    left: 30px;
    margin-top: 30px;
    width: 100px;
    height: 3px;

    background: #d9d9d9;

    transition: 0.3s all 0s ease-in-out;
  }

  @media (max-width: 1750px) {
    font-size: 48px;
    margin: 0 0 50px 0;

    &::before {
      left: 25px;
      margin-top: 25px;
    }
  }

  @media (max-width: 1500px) {
    width: 130px;
    font-size: 40px;
    margin: 0 0 40px 0;

    &::before {
      left: 30px;
      width: 70px;
      margin-top: 20px;
    }
  }

  @media (max-width: 1300px) {
    height: 50px;
    font-size: 36px;
    margin: 0 0 30px 0;

    &::before {
      left: 20px;
      margin-top: 15px;
    }
  }

  @media (max-width: 750px) {
    margin: 60px auto;

    &::before {
      margin-top: 20px;
    }
  }
`;

export const DN = styled.div`
  display: none;

  @media (max-width: 750px) {
    position: relative;
    display: block;
    width: 300px;
    height: 400px;
    margin-bottom: 80px;
  }

  @media (max-width: 450px) {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  @media (max-width: 330px) {
    margin: 0 auto 35px;
    width: 250px;
    height: 350px;
  }
`;

export const TextTwo = styled.div`
  width: 688px;
  height: 250px;

  font-weight: 600;
  font-size: 24px;
  line-height: 50px;
  margin-bottom: 30px;

  color: #d0d0d0;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    width: 588px;
    height: 280px;
  }

  @media (max-width: 1500px) {
    width: 500px;
    font-size: 20px;
    margin-bottom: 0px;
  }

  @media (max-width: 1300px) {
    width: 400px;
    height: 215px;
    font-size: 16px;
    line-height: 40px;
  }

  @media (max-width: 900px) {
    width: 300px;
    font-size: 14px;
    line-height: 30px;
  }

  @media (max-width: 750px) {
    text-align: center;
  }

  @media (max-width: 330px) {
    margin: 0 auto 15px;
    width: 230px;
    font-size: 12px;
  }
`;

export const Detailed = styled.div`
  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
