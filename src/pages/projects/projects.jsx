import { Wrapper } from './projects.style';
import TitleBlock from './title/title';
import Founded from './founded/founded';
import ExampleOne from './example/one/example';
import ExampleTwo from './example/two/example';

function Services() {
  return (
    <Wrapper>
      {/* Блок номер 1, 'Главная' */}
      <TitleBlock />

      {/* Блок номер 2, 'Основан' */}
      <Founded />

      {/* Блок номер 3, 'Проект № 1' */}
      <ExampleOne />

      {/* Блок номер 4, 'Проект № 2' */}
      <ExampleTwo />
    </Wrapper>
  );
}

export default Services;
