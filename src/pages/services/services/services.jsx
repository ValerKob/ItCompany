import {
  Wrapper,
  Title,
  Slider,
  Content,
  Card,
  ContentTwo,
  ButtonOne,
  ButtonTwo,
  TitleCard,
  Text,
  Info,
  Display,
  InfoImg,
} from './services.style';

import { ButtonAbout } from './../../../styles/global.style';
import TimeSvg from './../../../assets/images/services/icon/time.svg';
import SearchSvg from './../../../assets/images/services/icon/search.svg';
import ArrowSvg from './../../../assets/images/services/icon/arrow.svg';

function ServicesBlock() {
  return (
    <Wrapper>
      <Title>Услуги </Title>
      <Slider>
        <ButtonOne></ButtonOne>
        <Content>
          <Card>
            <TitleCard>Landing Page</TitleCard>
            <Info>
              <InfoImg src={TimeSvg} alt="Services" />
              <Text>От 12 дней</Text>
            </Info>
            <Info>
              <InfoImg src={SearchSvg} alt="Services" />
              <Text>От 10 000 Руб.</Text>
            </Info>
            <Info>
              <InfoImg src={ArrowSvg} alt="Services" />
              <Text>Правки в процессе бесплатно</Text>
            </Info>
            <Display>
              <ButtonAbout About variant="contained">
                Заказать
              </ButtonAbout>
            </Display>
          </Card>

          <Card>
            <TitleCard>Интернет-магазин</TitleCard>
            <Info>
              <InfoImg src={TimeSvg} alt="Services" />
              <Text>От 30 дней</Text>
            </Info>
            <Info>
              <InfoImg src={SearchSvg} alt="Services" />
              <Text>От 40 000 Руб.</Text>
            </Info>
            <Info>
              <InfoImg src={ArrowSvg} alt="Services" />
              <Text>Правки в процессе бесплатно</Text>
            </Info>
            <Display>
              <ButtonAbout About variant="contained">
                Заказать
              </ButtonAbout>
            </Display>
          </Card>

          <Card>
            <TitleCard>Blog</TitleCard>
            <Info>
              <InfoImg src={TimeSvg} alt="Services" />
              <Text>От 7 дней</Text>
            </Info>
            <Info>
              <InfoImg src={SearchSvg} alt="Services" />
              <Text>От 9 000 Руб.</Text>
            </Info>
            <Info>
              <InfoImg src={ArrowSvg} alt="Services" />
              <Text>Правки в процессе бесплатно</Text>
            </Info>
            <Display>
              <ButtonAbout About variant="contained">
                Заказать
              </ButtonAbout>
            </Display>
          </Card>
        </Content>
        <ContentTwo>
          <Card>
            <TitleCard>Landing Page</TitleCard>
            <Info>
              <InfoImg src={TimeSvg} alt="Services" />
              <Text>От 12 дней</Text>
            </Info>
            <Info>
              <InfoImg src={SearchSvg} alt="Services" />
              <Text>От 10 000 Руб.</Text>
            </Info>
            <Info>
              <InfoImg src={ArrowSvg} alt="Services" />
              <Text>Правки в процессе бесплатно</Text>
            </Info>
            <Display>
              <ButtonAbout About variant="contained">
                Заказать
              </ButtonAbout>
            </Display>
          </Card>
        </ContentTwo>
        <ButtonTwo></ButtonTwo>
      </Slider>
    </Wrapper>
  );
}

export default ServicesBlock;
