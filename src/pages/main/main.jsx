import TitleBlock from './title/title';
import About from './about/about';
import Services from './services/services';
import Projects from './projects/projects';
import Statistics from './statistics/statistics';
import Request from './request/request';

import { Wrapper } from './main.style';

function main() {
  return (
    <Wrapper>
      {/* Блок номер 1, 'Главная' */}
      <TitleBlock />

      {/* Блок номер 2, 'О нас' */}
      <About />

      {/* Блок номер 3, 'Услуги' */}
      <Services />

      {/* Блок номер 4, 'Проекты' */}
      <Projects />

      {/* Блок номер 5, 'Статистика' */}
      <Statistics />

      {/* Блок номер 6, 'Оставить запрос' */}
      <Request />
    </Wrapper>
  );
}

export default main;
