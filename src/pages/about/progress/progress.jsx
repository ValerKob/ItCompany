import { Grid, Card, CardContent, Typography } from '@mui/material';
import {
  TypographyNew,
  Wrapper,
  Laptop,
  LaptopShad,
  Slider,
  SliderContent,
  SliderButton,
  ButtonOne,
  ButtonTwo,
  ButtonWhree,
  SliderText,
  SliderImg,
  SliderContentOne,
  SliderContentTwo,
} from './progress.style';

import LaptopPng from './../../../assets/images/technic/Laptop.png';
import LaptopShadow from './../../../assets/images/technic/LaptopShadow.png';
import WorkSvg from './../../../assets/images/icon/progress/work.svg';
import { useState } from 'react';

function Progress() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Grid
        container
        sx={{
          margin: {
            xs: '150px auto',
            md: '150px auto',
            xl: '300px 150px 0',
          },
        }}
      >
        <Grid
          xs={6}
          sx={{
            display: {
              xs: 'none',
              lg: 'block',
            },
          }}
        >
          <Laptop src={LaptopPng} alt="Laptop" />
          <LaptopShad src={LaptopShadow} alt="LaptopShadow" />
        </Grid>
        <Grid xs={12} lg={6}>
          <Card sx={{ background: 'none', boxShadow: 'none' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: { xs: '36px', sm: '46px', xl: '52px' },
                  color: '#000',
                  lineHeight: {
                    xs: '60px',
                    xl: '20px',
                  },
                }}
              >
                Наши достижения
              </Typography>
              <TypographyNew>за 10 лет</TypographyNew>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: '14px',
                    sm: '20px',
                    xl: '24px',
                  },
                  lineHeight: '50px',
                  color: '#595959',
                  maxWidth: {
                    sm: '550px',
                    xl: '650px',
                  },
                  margin: '0 auto',
                }}
              >
                Все наши достижения вы можете у видеть на сладере ниже
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: {
              xs: 'center',
              lg: 'end',
            },
            margin: {
              xs: '50px 0 0 0',
              lg: '-100px 150px 0 0',
            },
          }}
        >
          <Slider>
            <SliderContent>
              <SliderContentOne open={open}>
                <SliderImg src={WorkSvg} alt="Достижение" />
                <SliderText>Создано 715 проектов</SliderText>
              </SliderContentOne>
              <SliderContentTwo open={open}>
                <SliderImg src={WorkSvg} alt="Достижение" />
                <SliderText>Проверка</SliderText>
              </SliderContentTwo>
            </SliderContent>
            <SliderButton>
              <ButtonOne open={open} onClick={() => setOpen(!open)}></ButtonOne>
              <ButtonTwo open={open} onClick={() => setOpen(!open)}></ButtonTwo>
            </SliderButton>
          </Slider>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default Progress;
