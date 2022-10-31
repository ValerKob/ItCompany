import React, { useState } from 'react';

import svgMail from './../../../assets/images/icon/mail.svg';
import svgTel from './../../../assets/images/icon/telephone.svg';
import svgTelegram from './../../../assets/images/icon/social/telegram.svg';
import svgTwitter from './../../../assets/images/icon/social/twitter.svg';
import svgVK from './../../../assets/images/icon/social/vk.svg';

import {
  HeaderWrapper,
  Container,
  Info,
  Row,
  Col,
  Text,
  LinkInfo,
  IconInfo,
  InfoSocial,
  SocialLink,
  SocialIcon,
  Language,
  SiteLink,
  Logo,
  BurgerLogo,
  SiteContent,
  LinkUl,
  BurgerLinkUl,
  Link,
  BurgerClick,
  Burger,
  BurgerLink,
  BurgerDouble,
  Type,
  LinkA,
} from './header.styled';
import { NavLink } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);

  /*

  Я ТУТ ОТРЕДОКТИРОВАЛ ПАРУ СТИЛЕЙ, ТАКИЕ КАК ColOne and ColTwo
  они стали Col

  Так же убрал лишние стили для ссылок. 

  Такой тег как LinkA, он наследуется от тега HTML <a></a>, 
  а такой тег как Link, он наследутеся от тега React <NavLink></NavLink>
  ТАК ЧТО ОНИ РАЗНЫЕ, В ПЛАНЕ Я ХЗ КАК СДЕЛАТЬ ЧЕРЕЩ props, так чтобы у низ были одинкавоые стили
  но они зависили от разных тегов

*/

  return (
    <HeaderWrapper>
      <Container>
        <Info>
          <Row>
            <Col>
              <LinkInfo href="#">
                <IconInfo src={svgMail} alt="Mail" />
              </LinkInfo>
              <Text>test@mail.ru</Text>
            </Col>

            <Col right>
              <LinkInfo href="#">
                <IconInfo src={svgTel} alt="Tel" />
              </LinkInfo>
              <Text>+7 (960) 000 46 12</Text>
            </Col>
          </Row>

          <InfoSocial>
            <SocialLink href="#">
              <SocialIcon src={svgTelegram} alt="Telegram" />
            </SocialLink>
            <SocialLink href="#">
              <SocialIcon src={svgTwitter} alt="Twitter" />
            </SocialLink>
            <SocialLink href="#">
              <SocialIcon src={svgVK} alt="VK" />
            </SocialLink>
            <Language name="#" id="#">
              <Type value="Russian">Russian</Type>
              <Type value="English">English</Type>
            </Language>
          </InfoSocial>
        </Info>
        <SiteLink>
          <Logo>LOGO</Logo>
          <SiteContent>
            <LinkUl>
              <Link to="/Main" active>
                Главная
              </Link>
              <Link to="/About">О нас</Link>
              <Link to="/Services">Услуги</Link>
              <Link to="/Projects">Проекты</Link>
              <LinkA href="#footer">Контакты</LinkA>
            </LinkUl>

            <BurgerClick open={open} onClick={() => setOpen(!open)}>
              <Burger open={open}></Burger>
            </BurgerClick>
          </SiteContent>
        </SiteLink>
      </Container>

      <BurgerLink open={open}>
        <BurgerLogo>
          <Logo>LOGO</Logo>
          <BurgerDouble onClick={() => setOpen(!open)}></BurgerDouble>
        </BurgerLogo>
        <Row>
          <Col>
            <LinkInfo href="#">
              <IconInfo src={svgMail} alt="Mail" />
            </LinkInfo>
            <Text>test@mail.ru</Text>
          </Col>

          <Col right>
            <LinkInfo href="#">
              <IconInfo src={svgTel} alt="Tel" />
            </LinkInfo>
            <Text>+7 (960) 000 46 12</Text>
          </Col>
        </Row>

        <BurgerLinkUl>
          <Link to="/Main" active>
            Главная
          </Link>
          <Link to="/About">О нас</Link>
          <Link to="/Services">Услуги</Link>
          <Link to="/Projects">Проекты</Link>
          <LinkA href="#footer">Контакты</LinkA>
        </BurgerLinkUl>

        <InfoSocial>
          <SocialLink href="#">
            <SocialIcon src={svgTelegram} alt="Telegram" />
          </SocialLink>
          <SocialLink href="#">
            <SocialIcon src={svgTwitter} alt="Twitter" />
          </SocialLink>
          <SocialLink href="#">
            <SocialIcon src={svgVK} alt="VK" />
          </SocialLink>
        </InfoSocial>
        <Language name="#" id="#">
          <Type value="Russian">Russian</Type>
          <Type value="English">English</Type>
        </Language>
      </BurgerLink>
    </HeaderWrapper>
  );
}

export default Header;
