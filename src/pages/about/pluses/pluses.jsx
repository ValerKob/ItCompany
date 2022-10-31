import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Wrapper, Content } from './pluses.style';

import PercentSvg from './../../../assets/images/icon/progress/percent.svg';
import ArrowSvg from './../../../assets/images/icon/progress/arrow.svg';
import SearchSvg from './../../../assets/images/icon/progress/search.svg';

function Pluses() {
  return (
    <Wrapper>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Grid xs={12}>
          <Card
            sx={{ background: 'none', boxShadow: 'none', textAlign: 'center' }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: '35px',
                    sm: '64px',
                  },
                  textAlign: 'center',
                  color: '#FFF',
                  margin: '50px 0',
                }}
              >
                Наши преимущества
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={6} xl={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Content>
            <CardContent>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '42px',
                  textAlign: 'center',
                  color: 'rgba(255, 0, 229, 0.71)',
                }}
              >
                Скидки и акции
              </Typography>
              <CardMedia
                sx={{ width: '150px', height: '150px', margin: '20px auto' }}
                component="img"
                image={PercentSvg}
                alt="Paella dish"
              />
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: '35px',
                    sm: '62px',
                  },
                  textAlign: 'center',
                  color: '#FF7A00',
                }}
              >
                До 10%
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '24px',
                  textAlign: 'center',
                  color: '#656565',
                  margin: '50px 0',
                }}
              >
                Скидка постоянным покупателям
              </Typography>
            </CardContent>
          </Content>
        </Grid>

        <Grid
          lg={6}
          xl={4}
          sx={{
            margin: {
              xs: '50px 0 0 0',
              md: '0',
            },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Content>
            <CardContent>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '42px',
                  textAlign: 'center',
                  color: '#8F00FF',
                }}
              >
                Короткие сроки
              </Typography>
              <CardMedia
                sx={{ width: '150px', height: '100px', margin: '50px auto' }}
                component="img"
                image={ArrowSvg}
                alt="Paella dish"
              />
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: '35px',
                    sm: '62px',
                  },
                  textAlign: 'center',
                  color: 'rgba(0, 102, 255, 0.8)',
                }}
              >
                До 30 дней
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '24px',
                  textAlign: 'center',
                  color: '#656565',
                  margin: '50px 0',
                }}
              >
                Самые быстрые сроки
              </Typography>
            </CardContent>
          </Content>
        </Grid>

        <Grid
          lg={6}
          xl={4}
          sx={{
            margin: {
              xs: '50px 0 0 0',
              xl: '0',
            },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Content>
            <CardContent>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '42px',
                  textAlign: 'center',
                  color: '#4985FF',
                }}
              >
                Широкий выбор
              </Typography>
              <CardMedia
                sx={{ width: '150px', height: '150px', margin: '20px auto' }}
                component="img"
                image={SearchSvg}
                alt="Paella dish"
              />
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: '35px',
                    sm: '62px',
                  },
                  textAlign: 'center',
                  color: '#79A4FB',
                }}
              >
                3+
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '24px',
                  textAlign: 'center',
                  color: '#656565',
                  margin: '50px 0',
                }}
              >
                Качественный сайт, это наша работа
              </Typography>
            </CardContent>
          </Content>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default Pluses;
