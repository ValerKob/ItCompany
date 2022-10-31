import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Дальше идут стили
export const HeaderWrapper = styled.div``;

export const Container = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  bottom: 1080;
  right: 0;

  z-index: 10;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    padding-top: 30px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 120px 0 120px;

  @media (max-width: 1500px) {
    margin-top: 20px;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Row = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    width: 0;
    height: 0;

    flex-direction: column;
    margin-top: 20px;
    margin-left: -20px;
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => (props.right ? '50px' : '0px')};

  @media (max-width: 1100px) {
    margin-left: 40px;
    width: 230px;
  }
`;

export const Text = styled.div`
  color: #959595;
  font-size: 26px;
  font-weight: 600;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    font-size: 20px;
  }
`;

export const LinkInfo = styled.a`
  margin-right: 25px;
  outline: none;
`;

export const IconInfo = styled.img`
  padding-top: 5px;
  width: 40px;
  height: 40px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    width: 30px;
    height: 35px;
  }
`;

export const InfoSocial = styled.div`
  display: flex;
  align-items: center;

  margin-left: -20px;
  margin-top: 0;

  @media (max-width: 1100px) {
    margin-left: 20px;
    margin-top: 40px;
    flex-direction: flex;
    justify-content: space-around;
  }
`;

export const SocialLink = styled.a`
  outline: none;
  margin-right: 60px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    margin-right: 50px;
  }
`;

export const SocialIcon = styled.img`
  padding-top: 5px;
  width: 40px;
  height: 40px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    width: 30px;
    height: 35px;
  }
`;

export const Language = styled.select`
  padding: 0 5px;
  line-height: 36px;
  height: 36px;
  background: none;
  border: none;
  font-size: 26px;
  color: #fff;

  width: 150px;

  &:focus {
    outline: none;
  }

  option {
    color: #000;
  }

  @media (max-width: 1100px) {
    color: #959595;

    margin-left: 20px;
    margin-top: 50px;
  }
`;

export const Type = styled.option``;

export const SiteLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 120px 0 120px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    margin-top: 20px;
  }

  @media (max-width: 1100px) {
    margin: 20px 20px 0 20px;
  }
`;

export const Logo = styled.div`
  font-weight: 600;
  font-size: 39px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1500px) {
    font-size: 30px;
  }

  @media (max-width: 1100px) {
    font-size: 40px;
  }
`;
export const BurgerLogo = styled.div`
  margin: 60px 0 0 20px;

  @media (max-width: 330px) {
    display: flex;
    align-items: center;
  }
`;

export const SiteContent = styled.div`
  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
  }
`;

export const LinkUl = styled.ul`
  display: flex;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const BurgerLinkUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  margin-left: -5px;

  li {
    margin-bottom: 10px;

    a {
      font-size: 22px;
    }
  }
`;

export const Link = styled(NavLink)`
  margin-right: 35px;
  list-style: none;
  font-weight: 600;
  font-size: 26px;

  position: relative;
  text-decoration: none;
  color: ${(props) => (props.active ? '#49DEFF' : '#fff')};
  outline: none;

  transition: 0.3s all 0s ease-in-out;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #49deff;
  }

  @media (max-width: 1500px) {
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    color: ${(props) => (props.active ? '#49DEFF' : '#959595')};
    margin-bottom: 20px;
  }
`;

export const LinkA = styled.a`
  margin-right: 35px;
  list-style: none;
  font-weight: 600;
  font-size: 26px;

  position: relative;
  text-decoration: none;
  color: ${(props) => (props.active ? '#49DEFF' : '#fff')};
  outline: none;

  transition: 0.3s all 0s ease-in-out;

  &:hover {
    color: #49deff;
  }

  @media (max-width: 1500px) {
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    color: ${(props) => (props.active ? '#49DEFF' : '#959595')};
  }
`;

export const Burger = styled.div`
  display: none;
  position: absolute;
  opacity: ${({ open }) => (open ? '0' : '1')};

  top: 50%;
  width: 50px;
  height: 4px;

  transition: 0.3s all 0s ease-in-out;
  background-color: #000;

  transform: ${({ open }) => (open ? 'translateX(-50px)' : 'translateX(0px)')};

  @media (max-width: 1100px) {
    display: block;
  }
`;

export const BurgerClick = styled.div`
  position: relative;
  width: 50px;
  height: 30px;

  &::before {
    content: '';
    display: none;
    position: absolute;

    opacity: 1;
    top: 0;
    left: 0;
    width: 50px;
    height: 4px;

    transition: 0.3s all 0s ease-in-out;
    background-color: #000;
    transform: ${({ open }) =>
      open
        ? 'translateY(15px) rotate(-45deg)'
        : 'translateY(0px) rotate(0deg)'};
  }

  &::after {
    content: '';
    display: none;
    position: absolute;

    opacity: 1;
    top: 100%;
    left: 0;
    width: 50px;
    height: 4px;

    transition: 0.3s all 0s ease-in-out;
    background-color: #000;
    transform: ${({ open }) =>
      open
        ? 'translateY(-15px) rotate(45deg)'
        : 'translateY(0px) rotate(0deg)'};
  }

  @media (max-width: 1100px) {
    &::before,
    &::after {
      display: block;
    }
  }
`;

export const BurgerLink = styled.div`
  position: absolute;
  display: none;
  margin-left: ${({ open }) => (open ? '0' : '-275px')};

  transition: 0.3s all 0s ease-in-out;
  top: 0;
  z-index: 10;
  width: 275px;
  height: 800px;
  background-color: rgb(255, 255, 255);

  box-shadow: 4px -4px 10px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 1100px) {
    display: block;
  }

  @media (max-width: 850px) {
    height: 750px;
  }

  @media (max-width: 550px) {
    height: 800px;
  }
`;
export const BurgerDouble = styled.div`
  position: absolute;
  display: none;

  width: 50px;
  height: 50px;

  &::before {
    content: '';
    position: absolute;

    opacity: 1;
    top: 50%;
    left: 0;
    width: 50px;
    height: 4px;

    transition: 0.3s all 0s ease-in-out;
    background-color: #000;

    transform: rotate(-45deg);
  }

  &::after {
    content: '';
    position: absolute;

    opacity: 1;
    top: 50%;
    left: 0;
    width: 50px;
    height: 4px;

    transition: 0.3s all 0s ease-in-out;
    background-color: #000;

    transform: rotate(45deg);
  }

  @media (max-width: 330px) {
    display: block;
    left: 200px;
  }
`;
