import LaptopPng from './../../../assets/images/technic/Laptop.png';
import LaptopShadow from './../../../assets/images/technic/LaptopShadow.png';
import PhonePng from './../../../assets/images/technic/Phone.png';
import PhoneShadow from './../../../assets/images/technic/PhoneShadow.png';
import PadPng from './../../../assets/images/technic/Pad.png';
import PadShadow from './../../../assets/images/technic/PadShadow.png';

import { ButtonAbout } from './../../../styles/global.style';
import {
  Wrapper,
  Row,
  ColOne,
  ColTwo,
  Content,
  ContentText,
  Laptop,
  LaptopShad,
  Phone,
  PhoneShad,
  Title,
  Text,
  Detailed,
  Pad,
  PadShad,
  ContentTextActive,
  DetailedActive,
  TextActive,
  Link,
} from './projects.style';

function Projects() {
  return (
    <Wrapper>
      <Row>
        <ColOne>
          <ContentTextActive>
            <Title>НАШИ ПРОЕКТЫ</Title>
          </ContentTextActive>
          <Content>
            <Laptop src={LaptopPng} alt="Laptop" />
            <LaptopShad src={LaptopShadow} alt="LaptopShadow" />
          </Content>
          <Content>
            <Phone src={PhonePng} alt="Phone" />
            <PhoneShad src={PhoneShadow} alt="PhoneShadow" />
          </Content>
        </ColOne>
        <ColTwo>
          <ContentText>
            <Title>НАШИ ПРОЕКТЫ</Title>
            <Text>
              Больше наших проетов вы ожете посмотрет, перейдя по ссылке ниже
            </Text>

            <Detailed>
              <Link to="/About">
                <ButtonAbout About variant="contained">
                  Проекты
                </ButtonAbout>
              </Link>
            </Detailed>
          </ContentText>
          <Content>
            <Pad src={PadPng} alt="Pad" />
            <PadShad src={PadShadow} alt="PadShadow" />
          </Content>
          <DetailedActive>
            <TextActive>
              Больше наших проетов вы ожете посмотрет, перейдя по ссылке ниже
            </TextActive>

            <ButtonAbout About variant="contained">
              Проекты
            </ButtonAbout>
          </DetailedActive>
        </ColTwo>
      </Row>
    </Wrapper>
  );
}

export default Projects;
