import { Wrapper, RectangleRight, TypographyNew } from './founded.styled';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import ServicesPng from './../../../assets/images/services/services.png';

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
              <TypographyNew>Наши услуги</TypographyNew>
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
                Услуги нашеи компаний являются самымы низкими, мы предоставляем
                только лучшее качество нашего продукта, вы можете в это
                убедиться заказав у нас одну из услгу представленных ниже, или
                можете посмотреть наши проекты.
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
                  image={ServicesPng}
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
