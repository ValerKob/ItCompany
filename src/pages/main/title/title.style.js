import styled from 'styled-components';

// Дальше идут стили
export const BlockHeaderBC = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  z-index: -2;
  width: 100%;
  height: 1080px;

  background-color: #f6f6f8;

  transition: 0.3s all 0s ease-in-out;

  overflow-x: hidden;

  @media (max-width: 1200px) {
    height: 900px;
  }

  @media (max-width: 1100px) {
    height: 800px;
  }

  @media (max-width: 850px) {
    height: 750px;
  }

  @media (max-width: 550px) {
    height: 800px;
  }
`;

export const Rectangle = styled.div`
  position: absolute;
  width: 1400.19px;
  height: 1355.62px;
  left: 1149px;
  top: -280.54px;

  transition: 0.3s all 0s ease-in-out;

  background: linear-gradient(
    41.63deg,
    rgba(0, 102, 255, 0.9) -3.18%,
    rgba(255, 0, 229, 0.7) 49.05%,
    rgba(255, 122, 0, 0.9) 99.56%
  );
  background-blend-mode: darken;
  border-radius: 16px;
  transform: rotate(-30.41deg);

  @media (max-width: 1650px) {
    left: 900px;
  }

  @media (max-width: 1200px) {
    left: 800px;
  }

  @media (max-width: 1100px) {
    left: 700px;
  }

  @media (max-width: 550px) {
    left: 500px;
  }

  @media (max-width: 450px) {
    left: 350px;
  }
`;

export const RectangleHidden = styled.div`
  position: absolute;

  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 1500px;

  overflow: hidden;

  @media (max-width: 1200px) {
    height: 1350px;
  }

  @media (max-width: 1100px) {
    height: 1250px;
  }

  @media (max-width: 900px) {
    height: 1000px;
  }
`;

export const BlockHeader = styled.div`
  position: absolute;

  top: 0;
  left: 120px;
  right: 120px;
  bottom: 0;

  z-index: 5;
  max-width: 1960px;
  height: 1080px;

  transition: 0.3s all 0s ease-in-out;

  overflow-x: hidden;

  @media (max-width: 1200px) {
    height: 900px;

    left: 120px;
    right: 120px;
  }

  @media (max-width: 1100px) {
    height: 800px;

    left: 40px;
    right: 40px;
  }

  @media (max-width: 850px) {
    height: 750px;

    left: 20px;
    right: 20px;
  }

  @media (max-width: 550px) {
    height: 800px;
  }
`;

export const Row = styled.div`
  width: 100%;

  margin-top: 360px;
  display: flex;
  justify-content: space-between;

  transition: 0.3s all 0s ease-in-out;

  overflow: hidden;

  @media (max-width: 1100px) {
    margin-top: 215px;
  }

  @media (max-width: 750px) {
    justify-content: center;
  }

  @media (max-width: 550px) {
    margin-top: 170px;
  }
`;

export const ColOne = styled.div``;

export const Wrapper = styled.div``;

export const Content = styled.div``;

export const Title = styled.div`
  width: 850px;

  font-weight: 600;
  font-size: 52px;
  line-height: 85px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    width: 650px;

    font-size: 46px;
    line-height: 70px;
  }

  @media (max-width: 1500px) {
    width: 450px;

    font-size: 30px;
    line-height: 55px;
  }

  @media (max-width: 750px) {
    text-align: center;
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 300px;
  }

  @media (max-width: 330px) {
    width: 250px;

    font-size: 25px;
  }
`;

export const Text = styled.div`
  width: 824px;
  margin-top: 45px;

  font-weight: 600;
  font-size: 24px;
  line-height: 50px;

  transition: 0.3s all 0s ease-in-out;

  color: #b5b5b5;

  @media (max-width: 1750px) {
    width: 650px;
    margin-top: 40px;

    font-size: 18px;
    line-height: 45px;
  }

  @media (max-width: 1500px) {
    width: 450px;
    margin-top: 30px;

    line-height: 35px;
  }

  @media (max-width: 750px) {
    text-align: center;

    width: 500px;
  }

  @media (max-width: 550px) {
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 300px;
  }

  @media (max-width: 330px) {
    width: 250px;

    font-size: 14px;
  }
`;

export const Buttons = styled.div`
  margin-top: 70px;
  max-width: 610px;
  display: flex;

  @media (max-width: 750px) {
    max-width: 700px;
    justify-content: center;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`;

export const ColTwo = styled.div`
  max-width: 650px;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const ImgTitle = styled.img`
  max-width: 650px;
  height: 400px;
  box-shadow: -4px 4px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1750px) {
    max-width: 550px;
    height: 350px;
  }

  @media (max-width: 1500px) {
    max-width: 450px;
    height: 250px;
  }

  @media (max-width: 1200px) {
    object-fit: cover;
    max-width: 300px;
    height: 400px;
  }

  @media (max-width: 850px) {
    max-width: 250px;
    height: 300px;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const ImgSvg = styled.img`
  margin-left: 40px;
`;

export const Services = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1200px) {
    margin-left: 30px;
  }

  @media (max-width: 550px) {
    margin-top: 30px;
    margin-left: 0;
  }
`;

export const BtnOne = styled.div`
  width: 300px;
  height: 100px;
  margin-top: 10px;
  padding-left: 5px;

  transition: 0.3s all 0s ease-in-out;
  cursor: pointer;

  @media (max-width: 1500px) {
    width: 210px;
    height: 60px;
    margin-top: 5px;
  }
`;

export const LinkServices = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
`;

export const ButtonServices = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;

  transition: 0.3s all 0s ease-in-out;

  color: #4985ff;

  @media (max-width: 1500px) {
    font-size: 22px;
  }
`;
export const Link = styled.a`
  display: flex;
  text-decoration: none;
`;
