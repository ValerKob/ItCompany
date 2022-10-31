import { Wrapper } from './about.style';
import TitleBlock from './title/title';
import Founded from './founded/founded';
import Progress from './progress/progress';
import Pluses from './pluses/pluses';

function About() {
  return (
    <Wrapper>
      {/* Блок номер 1, 'Главная' */}
      <TitleBlock />

      {/* Блок номер 2, 'Основан' */}
      <Founded />

      {/* Блок номер 3, 'Достижения' */}
      <Progress />

      {/* Блок номер 4, 'Преимущества' */}
      <Pluses />
    </Wrapper>
  );
}

export default About;
