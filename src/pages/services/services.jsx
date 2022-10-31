import { Wrapper } from './services.style';
import TitleBlock from './title/title';
import Founded from './founded/founded';
import ServicesBlock from './services/services';
import Footer from './../../components/layout/footer/footer';

function Services() {
  return (
    <Wrapper>
      {/* Блок номер 1, 'Главная' */}
      <TitleBlock />

      {/* Блок номер 2, 'Основан' */}
      <Founded />

      {/* Блок номер 3, 'Услуги' */}
      <ServicesBlock />
    </Wrapper>
  );
}

export default Services;
