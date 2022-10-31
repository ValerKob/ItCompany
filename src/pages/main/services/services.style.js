import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Дальше идут стили
export const Wrapper = styled.div`
  max-width: 1680px;
  height: 980px;

  margin: 0 120px 0;
  overflow-x: hidden;
  z-index: -5;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    height: 1200px;
  }

  @media (max-width: 1100px) {
    margin: 0 40px 0;
  }

  @media (max-width: 1000px) {
    height: 1980px;
    margin: 0 0 0 0;
    padding-top: 200px;
  }

  @media (max-width: 400px) {
    height: 1780px;
    margin: 0 0 0 0;
    padding-top: 200px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1680px;
  height: 840px;

  background: linear-gradient(
    44.15deg,
    #0066ff -4.98%,
    rgba(255, 0, 229, 0.7) 48.02%,
    #ff7a00 99.26%
  );
  background-blend-mode: darken;
  border-radius: 16px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    height: 1140px;
  }

  @media (max-width: 1000px) {
    margin: 0 -300px 0 -300px;
    max-width: 1980px;
    height: 1650px;
    transform: rotate(-15deg);
  }

  @media (max-width: 400px) {
    height: 1450px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1500px;
  height: 600px;
  margin: 0 90px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    height: 1640px;
    transform: rotate(15deg);
  }
`;

export const ColOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 600px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    width: 450px;
  }

  @media (max-width: 1500px) {
    width: 600px;
  }

  @media (max-width: 1000px) {
    width: 500px;
    height: 250px;
  }

  @media (max-width: 750px) {
    width: 400px;
  }

  @media (max-width: 400px) {
    width: 300px;
    height: 200px;
    margin-bottom: 20px;
  }
`;

export const ColTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 760px;
  height: 600px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    width: 700px;
  }

  @media (max-width: 1000px) {
    height: 1080px;
  }

  @media (max-width: 400px) {
    height: 840px;
  }
`;

export const Tilte = styled.div`
  font-weight: 600;
  font-size: 52px;
  line-height: 90px;
  color: #ffffff;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    font-size: 48px;
    line-height: 70px;
  }

  @media (max-width: 1500px) {
    text-align: center;
    margin-bottom: 70px;
  }

  @media (max-width: 1000px) {
    font-size: 46px;
    line-height: 65px;
    margin-bottom: 0;
  }

  @media (max-width: 750px) {
    font-size: 40px;
  }

  @media (max-width: 400px) {
    font-size: 30px;
    line-height: 55px;
  }
`;

export const Text = styled.div`
  width: 370px;
  font-weight: 600;
  font-size: 24px;
  line-height: 50px;
  margin-top: 20px;
  color: #dadada;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    display: none;
  }
`;

export const TextActive = styled(Text)`
  display: none;

  @media (max-width: 1500px) {
    width: 500px;
    margin: 0 auto;
    text-align: center;
    display: block;
  }

  @media (max-width: 1000px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 270px;
    font-size: 22px;
    margin-top: 30px;
  }
`;

export const Detailed = styled.div`
  margin-top: 80px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    display: none;
  }

  @media (max-width: 1000px) {
    width: 400px;
  }

  @media (max-width: 750px) {
    width: 350px;
    font-size: 20px;
    line-height: 45px;
  }
`;

export const DetailedTwo = styled.div`
  margin-top: 50px;

  transition: 0.3s all 0s ease-in-out;

  @media (min-width: 1500px) {
    display: none;
  }

  @media (max-width: 400px) {
    margin-top: 30px;
  }
`;

export const Service = styled.div`
  display: flex;
  justify-content: space-between;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    &:last-child {
      align-items: flex-end;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:last-child {
      align-items: center;
    }
  }
`;

export const ServiceContent = styled.div`
  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 360px;
  height: 240px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 1000px) {
    margin-top: 30px;
    margin-right: 0;
    width: 320px;
  }

  @media (max-width: 400px) {
    width: 270px;
    height: 180px;
  }
`;
export const ServiceIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background-color: #fff;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 400px) {
    width: 30px;
    height: 30px;
  }
`;

export const ServiceTitel = styled.div`
  margin-top: 15px;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    width: 150px;
    margin: 0 0 0 30px;
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const ServiceText = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 26px;
  line-height: 40px;
  color: #dadada;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 400px) {
    font-size: 22px;
    line-height: 35px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
