import { useState } from 'react';

import { ButtonAbout } from './../../../styles/global.style';
import {
  Wrapper,
  Row,
  ColOne,
  AboutImg,
  Content,
  Text,
  Title,
  TitleNone,
  Buttons,
  ButtonOne,
  ButtonTwo,
  ColTwo,
  TitleTwo,
  DN,
  TextTwo,
  Detailed,
  Link,
} from './about.style';

import jpgHardWork from './../../../assets/images/work/hardWork.jpg';

function About() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper id="about">
      <Row>
        <ColOne>
          <AboutImg src={jpgHardWork} alt="О нас" />
          <Content>
            <Text>
              <Title open={open}>
                1 Lorem Ipsum - это текст рыба, часто используемый в печати
                Lorem Ipsum - это текст рыба
              </Title>
              <TitleNone open={open}>
                2 Lorem Ipsum - это текст рыба, часто используемый в печати
                Lorem Ipsum - это текст рыба
              </TitleNone>
            </Text>

            <Buttons>
              <ButtonOne open={open} onClick={() => setOpen(!open)}></ButtonOne>
              <ButtonTwo open={open} onClick={() => setOpen(!open)}></ButtonTwo>
            </Buttons>
          </Content>
        </ColOne>

        <ColTwo>
          <TitleTwo>О НАС</TitleTwo>
          <DN>
            <AboutImg src={jpgHardWork} alt="О нас" />
            <Content>
              <Text>
                <Title open={open}>
                  1 Lorem Ipsum - это текст рыба, часто используемый в печати
                  Lorem Ipsum - это текст рыба
                </Title>
                <TitleNone open={open}>
                  2 Lorem Ipsum - это текст рыба, часто используемый в печати
                  Lorem Ipsum - это текст рыба
                </TitleNone>
              </Text>

              <Buttons>
                <ButtonOne
                  open={open}
                  onClick={() => setOpen(!open)}
                ></ButtonOne>
                <ButtonTwo
                  open={open}
                  onClick={() => setOpen(!open)}
                ></ButtonTwo>
              </Buttons>
            </Content>
          </DN>
          <TextTwo>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. стандартной "рыбой" для текстов на
            латинице с начала XVI века.
          </TextTwo>
          <Detailed>
            <Link to="/About">
              <ButtonAbout About variant="contained">
                Подробнее
              </ButtonAbout>
            </Link>
          </Detailed>
        </ColTwo>
      </Row>
    </Wrapper>
  );
}

export default About;
