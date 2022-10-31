import ShieldSvg from './../../../assets/images/icon/services/shield.svg';

import { ButtonAbout } from './../../../styles/global.style';
import {
  Wrapper,
  Info,
  Row,
  ColOne,
  ColTwo,
  Tilte,
  Text,
  Detailed,
  Service,
  Content,
  ServiceIcon,
  Icon,
  ServiceTitel,
  ServiceText,
  ServiceContent,
  DetailedTwo,
  TextActive,
  Link,
} from './services.style';

function Services() {
  return (
    <Wrapper id="arrow">
      <Info>
        <Row>
          <ColOne>
            <Tilte>УСЛУГИ КОТОРАЯ ПРЕДОСТОВЛЯЕТ НАША КОМПАНИЯ</Tilte>
            <Text>Больше услуг, представленно по ссылке ниже</Text>
            <Detailed>
              <Link to="/Services">
                <ButtonAbout About variant="contained">
                  Все услуги
                </ButtonAbout>
              </Link>
            </Detailed>
          </ColOne>
          <ColTwo>
            <Service>
              <Content>
                <ServiceContent>
                  <ServiceIcon>
                    <Icon src={ShieldSvg} alt="Icon" />
                  </ServiceIcon>
                  <ServiceTitel>Создание сайтов</ServiceTitel>
                </ServiceContent>
                <ServiceText>
                  Мы создадим сайт и выгрузим его на хостинг
                </ServiceText>
              </Content>
              <Content>
                <ServiceContent>
                  <ServiceIcon>
                    <Icon src={ShieldSvg} alt="Icon" />
                  </ServiceIcon>
                  <ServiceTitel>Создание сайтов</ServiceTitel>
                </ServiceContent>
                <ServiceText>
                  Мы создадим сайт и выгрузим его на хостинг
                </ServiceText>
              </Content>
            </Service>
            <Service>
              <Content>
                <ServiceContent>
                  <ServiceIcon>
                    <Icon src={ShieldSvg} alt="Icon" />
                  </ServiceIcon>
                  <ServiceTitel>Создание сайтов</ServiceTitel>
                </ServiceContent>
                <ServiceText>
                  Мы создадим сайт и выгрузим его на хостинг
                </ServiceText>
              </Content>
              <Content>
                <ServiceContent>
                  <ServiceIcon>
                    <Icon src={ShieldSvg} alt="Icon" />
                  </ServiceIcon>
                  <ServiceTitel>Создание сайтов</ServiceTitel>
                </ServiceContent>
                <ServiceText>
                  Мы создадим сайт и выгрузим его на хостинг
                </ServiceText>
              </Content>
            </Service>
          </ColTwo>
          <TextActive>Больше услуг, представленно по ссылке ниже</TextActive>
          <DetailedTwo>
            <Link to="/Services">
              <ButtonAbout About variant="contained">
                Все услуги
              </ButtonAbout>
            </Link>
          </DetailedTwo>
        </Row>
      </Info>
    </Wrapper>
  );
}

export default Services;
