import svgArrow from './../../../assets/images/icon/arrow.svg';
import jpgTitle from './../../../assets/images/work/title.jpg';

import { ButtonAbout } from './../../../styles/global.style';
import {
  BlockHeaderBC,
  Rectangle,
  RectangleHidden,
  BlockHeader,
  Row,
  ColOne,
  Wrapper,
  Content,
  Title,
  Text,
  Buttons,
  ColTwo,
  ImgTitle,
  ImgSvg,
  Services,
  BtnOne,
  LinkServices,
  ButtonServices,
  Link,
} from './title.style';

function TitleBlock() {
  return (
    <Wrapper>
      <BlockHeaderBC></BlockHeaderBC>

      <BlockHeader>
        <Row>
          <ColOne>
            <Content>
              <Title>Мы создаем легкие решения Cложных задач и проблем</Title>
              <Text>
                Мы делаем работу качественне других, так же у нас очень большой
                персонал, Мы делаем работу качественне других, так же у нас
                очень большой персонал
              </Text>
            </Content>

            <Buttons>
              <BtnOne>
                <Link href="#about">
                  <ButtonAbout variant="contained">О нас</ButtonAbout>
                </Link>
              </BtnOne>
              <Services>
                <LinkServices>
                  <Link href="#arrow">
                    <ButtonServices>К услугам</ButtonServices>
                    <ImgSvg src={svgArrow} alt="Arrow" />
                  </Link>
                </LinkServices>
              </Services>
            </Buttons>
          </ColOne>
          <ColTwo>
            <Content>
              <ImgTitle src={jpgTitle} alt="Title" />
            </Content>
          </ColTwo>
        </Row>
      </BlockHeader>

      <RectangleHidden>
        <Rectangle></Rectangle>
      </RectangleHidden>
    </Wrapper>
  );
}

export default TitleBlock;
