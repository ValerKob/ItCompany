import { Wrapper, RectangleRight, TypographyNew } from './founded.styled';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import AboutPng from './../../../assets/images/about/about.png';

function Founded() {
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
                Нашей компаний
              </Typography>
              <TypographyNew>уже 10 лет</TypographyNew>
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
                Ура наконец-то, наша комания отмечает юбилей 10 лет, это очень
                радостное для нас событие, ровно 10 лет тому назад наш директор
                основал компанию, Lorem Ipsum - это текст-"рыба", часто
                используемый в печати и вэб-дизайне. Lorem Ipsum является
                стандартной "рыбой" для текстов на латинице с начала XVI века.
                Lorem Ipsum является стандартной "рыбой" для текстов на
                латинице.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          xs={6}
          sx={{
            display: {
              xs: 'none',
              lg: 'block',
            },
          }}
        >
          <Grid xs={6}>
            <Card
              sx={{ width: '700px', background: 'none', boxShadow: 'none' }}
            >
              <CardContent
                sx={{
                  padding: {
                    lg: '100px 0 0 0',
                    xl: '0',
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: {
                      lg: '500px',
                      xl: '600px',
                    },
                    height: {
                      lg: '300px',
                      xl: '400px',
                    },
                    borderRadius: '16px',
                  }}
                  component="img"
                  image={AboutPng}
                  alt="Paella dish"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      {/* Блок с градиентом */}
      <RectangleRight></RectangleRight>
    </Wrapper>
  );
}

export default Founded;
