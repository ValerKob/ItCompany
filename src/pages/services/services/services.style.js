import styled from 'styled-components';

// Дальше идут стили
export const Wrapper = styled.div`
  max-width: 1680px;
  height: 800px;
  margin: 200px auto;
  overflow: hidden;

  background: linear-gradient(
    100.47deg,
    #4985ff -1.51%,
    rgba(255, 0, 229, 0.7) 50%,
    #ff7a00 101.5%
  );
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 500px) {
    height: 650px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  padding: 30px 0;
  color: #ffffff;

  transition: 0.3s all 0s ease-in-out;
`;

export const Slider = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const ContentTwo = styled(Content)`
  display: none;

  @media (max-width: 1300px) {
    display: block;
  }
`;

export const Card = styled.div`
  width: 400px;
  height: 500px;
  left: 280px;
  top: 1633px;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  @media (max-width: 1300px) {
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    width: 300px;
    height: 400px;
  }

  @media (max-width: 400px) {
    width: 200px;
    height: 400px;
  }
`;

export const ButtonOne = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  margin: 0 0 0 20px;
  transform: rotate(-45deg);
  border-left: 6px solid #ffffff;
  border-top: 6px solid #ffffff;

  @media (max-width: 1300px) {
    margin: 0 0 0 50px;
  }

  @media (max-width: 600px) {
    margin: 0 0 0 20px;
  }
`;

export const ButtonTwo = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  margin: 0 20px 0 0;
  transform: rotate(-45deg);
  border-right: 6px solid #ffffff;
  border-bottom: 6px solid #ffffff;

  @media (max-width: 1300px) {
    margin: 0 50px 0 0;
  }

  @media (max-width: 600px) {
    margin: 0 20px 0 0;
  }
`;

export const TitleCard = styled.div`
  font-weight: 600;
  font-size: 42px;
  line-height: 65px;
  text-align: center;
  margin-top: 30px;

  background: linear-gradient(
    110.78deg,
    #4985ff 27.34%,
    rgba(255, 0, 229, 0.7) 63.75%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 500px) {
    font-size: 32px;
    line-height: 55px;
  }

  @media (max-width: 400px) {
    font-size: 26px;
    line-height: 50px;
  }
`;

export const Info = styled.div`
  display: flex;
  margin: 30px 0 0 80px;

  @media (max-width: 500px) {
    margin: 30px 0 0 50px;
  }

  @media (max-width: 400px) {
    margin: 20px 0 0 30px;
  }
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color: #000000;

  @media (max-width: 500px) {
    font-size: 22px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const Display = styled.div`
  width: 290px;
  margin: 30px auto 0;

  @media (max-width: 500px) {
    width: 200px;
  }
`;

export const InfoImg = styled.img`
  margin-right: 15px;
  margin-left: -15px;
`;
