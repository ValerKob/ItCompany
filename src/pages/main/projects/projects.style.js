import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Дальше идут стили
export const Wrapper = styled.div`
  max-width: 1680px;
  height: auto;
  margin: 0 120px 0;
  overflow-x: hidden;
  z-index: -5;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1000px) {
    margin: 0 40px 0;
  }

  @media (max-width: 850px) {
    margin: 0 20px 0;
  }

  @media (max-width: 400px) {
    margin: -150px 0 0 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 40px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1800px) {
    margin: 0;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ColOne = styled.div`
  max-width: 800px;

  transition: 0.3s all 0s ease-in-out;
`;

export const ColTwo = styled.div`
  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Content = styled.div`
  transition: 0.3s all 0s ease-in-out;
`;

export const ContentText = styled.div`
  margin-left: 150px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1620px) {
    margin: 0 0 0 100px;
  }

  @media (max-width: 1300px) {
    margin: 0 0 0 10px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContentTextActive = styled(ContentText)`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    width: 400px;
    text-align: center;
    margin: 0 auto;
  }

  @media (max-width: 400px) {
    margin: 0;
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
  margin: -80px 0 80px;

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

export const Phone = styled.img`
  width: 250px;
  height: 300px;
  margin: -200px 0 100px 500px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1620px) {
    width: 200px;
    height: 250px;
    margin: -125px 0 100px 350px;
  }

  @media (max-width: 1300px) {
    width: 175px;
    height: 225px;
    margin: -75px 0 100px 255px;
  }

  @media (max-width: 1000px) {
    margin: -75px 0 100px 350px;
  }

  @media (max-width: 570px) {
    margin: -75px 0 100px 200px;
  }

  @media (max-width: 430px) {
    margin: 0 0 100px 100px;
  }

  @media (max-width: 370px) {
    width: 150px;
    height: 200px;
  }
`;

export const PhoneShad = styled.img`
  margin: 0 0 0 -215px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1300px) {
    margin: 0 0 0 -200px;
  }

  @media (max-width: 370px) {
    margin: 0 0 0 -175px;
  }
`;

export const Title = styled.div`
  position: relative;
  width: 471px;
  height: 50px;
  font-weight: 600;
  font-size: 52px;
  line-height: 40px;
  margin-top: 100px;

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
    left: 100px;
    margin-top: 20px;
    width: 200px;
    height: 3px;

    background: #d9d9d9;

    transition: 0.3s all 0s ease-in-out;
  }

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1620px) {
    font-size: 48px;
    line-height: 30px;

    &::before {
      width: 180px;
    }
  }

  @media (max-width: 1300px) {
    font-size: 40px;
    line-height: 30px;

    &::before {
      left: 80px;
      width: 150px;
    }
  }

  @media (max-width: 1000px) {
    width: 400px;
    margin-top: 0;

    &::before {
      left: 150px;
      width: 100px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 50px;
  }

  @media (max-width: 400px) {
    width: 300px;
    font-size: 30px;

    &::before {
      left: 100px;
      width: 100px;
      margin-top: 10px;
    }
  }
`;

export const Text = styled.div`
  width: 374px;
  height: 144px;
  margin-top: 40px;

  font-weight: 600;
  font-size: 24px;
  line-height: 200%;
  color: #656565;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1620px) {
    font-size: 22px;
  }

  @media (max-width: 1300px) {
    font-size: 20px;
    line-height: 180%;
    width: 300px;
  }

  @media (max-width: 1000px) {
    width: 400px;
  }
`;

export const TextActive = styled(Text)`
  width: 300px;
  margin: 0 auto;

  @media (max-width: 300px) {
    width: 270px;
  }
`;

export const Detailed = styled.div`
  margin-top: 60px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1620px) {
    margin-top: 30px;
  }

  @media (max-width: 1300px) {
    margin-top: 0;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const DetailedActive = styled(Detailed)`
  display: block;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const Pad = styled.img`
  width: 500px;
  height: 450px;
  margin: 100px 0 0 230px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1710px) {
    margin: 100px 0 0 130px;
  }

  @media (max-width: 1620px) {
    width: 400px;
    height: 350px;
    margin: 100px 0 0 50px;
  }

  @media (max-width: 1300px) {
    width: 300px;
    height: 250px;
    margin: 100px 0 0 25px;
  }

  @media (max-width: 1000px) {
    margin: 50px 0 0 200px;
  }

  @media (max-width: 570px) {
    margin: 50px 0 0 0;
  }

  @media (max-width: 370px) {
    width: 200px;
    height: 150px;
    margin: 50px 0 0 0;
  }
`;

export const PadShad = styled.img`
  width: 550px;
  height: 350px;
  margin: -150px 0 0 130px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1710px) {
    margin: -150px 0 0 30px;
  }

  @media (max-width: 1620px) {
    margin: -150px 0 0 -50px;
  }

  @media (max-width: 1620px) {
    margin: -100px 0 0 0;
    width: 450px;
    height: 250px;
  }

  @media (max-width: 1300px) {
    margin: -50px 0 0 0;
    width: 350px;
    height: 150px;
  }

  @media (max-width: 1000px) {
    margin: -50px 0 0 150px;
  }

  @media (max-width: 570px) {
    margin: -50px 0 0 -50px;
  }

  @media (max-width: 370px) {
    margin: -25px 0 0 0;
    width: 250px;
    height: 100px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
