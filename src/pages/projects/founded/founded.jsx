import { Wrapper, RectangleRight, TypographyNew } from './founded.styled';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import TitlePng from './../../../assets/images/projects/title.png';

function Founded() {
  return (
    <Wrapper>
      <Grid
        container
        sx={{
          margin: {
            xs: '150px auto',
            md: '150px auto',
            xl: '300px 0 0 0',
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
          <Grid xs={6} sx={{ margin: '-10px auto 0' }}>
            <Card
              sx={{
                width: '600px',
                background: 'none',
                boxShadow: 'none',
                textAlign: 'center',
              }}
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
                  image={TitlePng}
                  alt="Paella dish"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid xs={12} lg={6}>
          <Card sx={{ background: 'none', boxShadow: 'none' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <TypographyNew>Наши проекты</TypographyNew>
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
                Наши проекты это сайты или приложения которые мы создавали для
                заказчиков и при их согласии мы разместили на нашем сайте
                созданные проекты, вы так же можете отказаться и мы не будем
                размещать сайт в наших проектах.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Блок с градиентом */}
      <RectangleRight></RectangleRight>
    </Wrapper>
  );
}

export default Founded;
