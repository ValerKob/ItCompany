import {
  Wrapper,
  Union,
  Titel,
  Text,
  Info,
  Content,
  Png,
  ButtonActive,
  Button,
  Buttons,
  GridTwo,
  GridOne,
} from './example.style';
import { Grid } from '@mui/material';
import UnionPng from './../../../../assets/images/projects/icon/Union.png';
import InfoPng from './../../../../assets/images/projects/info/Info.png';

function Example() {
  return (
    <Wrapper>
      <GridOne xs={12} lg={6} sx={{ position: 'relative' }}>
        <Union src={UnionPng} alt="Union" />
        <Info>
          <Titel>Сайт LOGO</Titel>
          <Text>
            Этот сайт был создан с помощью такой технологий верстки, как React
            Ui Library.
          </Text>
          <Text>
            Этото сайт принадлежит очень известной компаний и создавался он в
            телечиний 10 дней.
          </Text>
        </Info>
      </GridOne>
      <Grid container>
        <Grid
          xs={12}
          lg={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Content>
            <Png src={InfoPng} alt="Info" />
          </Content>
          <Buttons>
            <ButtonActive></ButtonActive>
            <Button></Button>
          </Buttons>
        </Grid>
        <GridTwo xs={12} lg={6} sx={{ position: 'relative' }}>
          <Union src={UnionPng} alt="Union" />
          <Info>
            <Titel>Сайт LOGO</Titel>
            <Text>
              Этот сайт был создан с помощью такой технологий верстки, как React
              Ui Library.
            </Text>
            <Text>
              Этото сайт принадлежит очень известной компаний и создавался он в
              телечиний 10 дней.
            </Text>
          </Info>
        </GridTwo>
      </Grid>
    </Wrapper>
  );
}

export default Example;
