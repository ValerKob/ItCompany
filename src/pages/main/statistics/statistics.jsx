import {
  styled,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from '@mui/material';
import StarSvg from './../../../assets/images/statistics/star.svg';
import ClientsSvg from './../../../assets/images/statistics/clients.svg';
import HandshakeSvg from './../../../assets/images/statistics/handshake.svg';
import WorkrSvg from './../../../assets/images/statistics/work.svg';

import { Container } from './statistics.style';

function Statistics() {
  return (
    <Container>
      <Grid
        container
        sx={{
          padding: {
            xs: 0,
            sm: '50px',
            md: '50px',
          },
        }}
      >
        <Grid
          xs={12}
          sm={12}
          md={6}
          xl={3}
          sx={{
            textAlign: 'center',
            transition: '0.3s all 0s ease-in-out',
            width: 300,
            height: {
              xs: '150px',
              md: '200px',
            },
          }}
        >
          <Card
            sx={{
              background: 'none',
              boxShadow: 'none',
              borderRight: {
                xl: '3px solid #D9D9D9',
              },
              borderBottom: {
                xl: '0px solid #D9D9D9',
                xs: '3px solid #D9D9D9',
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: { xs: 100, md: 150 }, height: { xs: 100, md: 150 } }}
              image={StarSvg}
              alt="Live from space album cover"
            />
            <CardContent>
              <Typography
                sx={{
                  fontSize: {
                    xs: 40,
                    md: 56,
                    xl: 62,
                  },
                  fontWeight: 600,
                }}
                color="#fff"
              >
                319
              </Typography>
              <Typography
                s
                sx={{
                  fontSize: {
                    xs: 18,
                    md: 20,
                    xl: 32,
                  },
                  color: '#DADADA',
                  fontWeight: 600,
                }}
              >
                Клиентов
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          xl={3}
          sx={{
            textAlign: 'center',
            transition: '0.3s all 0s ease-in-out',
            width: 300,
            height: {
              xs: '150px',
              md: '200px',
            },
          }}
        >
          <Card
            sx={{
              background: 'none',
              boxShadow: 'none',
              borderRight: {
                xl: '3px solid #D9D9D9',
              },
              borderBottom: {
                xl: '0px solid #D9D9D9',
                xs: '3px solid #D9D9D9',
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: { xs: 80, md: 130 }, height: { xs: 80, md: 130 } }}
              image={WorkrSvg}
              alt="Live from space album cover"
            />
            <CardContent>
              <Typography
                sx={{
                  fontSize: {
                    xs: 40,
                    md: 56,
                    xl: 62,
                  },
                  fontWeight: 600,
                }}
                color="#fff"
              >
                715
              </Typography>
              <Typography
                s
                sx={{
                  fontSize: {
                    xs: 18,
                    md: 20,
                    xl: 32,
                  },
                  color: '#DADADA',
                  fontWeight: 600,
                }}
              >
                Проектов
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          xl={3}
          sx={{
            textAlign: 'center',
            transition: '0.3s all 0s ease-in-out',
            width: 300,
            height: {
              xs: '150px',
              md: '200px',
            },
          }}
        >
          <Card
            sx={{
              background: 'none',
              boxShadow: 'none',
              borderRight: {
                xl: '3px solid #D9D9D9',
              },
              borderBottom: {
                xl: '0px solid #D9D9D9',
                md: '0px solid #D9D9D9',
                xs: '3px solid #D9D9D9',
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: { xs: 80, md: 130 }, height: { xs: 80, md: 130 } }}
              image={ClientsSvg}
              alt="Live from space album cover"
            />
            <CardContent>
              <Typography
                sx={{
                  fontSize: {
                    xs: 40,
                    md: 56,
                    xl: 62,
                  },
                  fontWeight: 600,
                }}
                color="#fff"
              >
                79
              </Typography>
              <Typography
                s
                sx={{
                  fontSize: {
                    xs: 18,
                    md: 20,
                    xl: 32,
                  },
                  color: '#DADADA',
                  fontWeight: 600,
                }}
              >
                Сотрудников
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          xl={3}
          sx={{
            textAlign: 'center',
            transition: '0.3s all 0s ease-in-out',
            width: 300,
            height: {
              xs: '150px',
              md: '200px',
            },
          }}
        >
          <Card
            sx={{
              background: 'none',
              boxShadow: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: { xs: 100, md: 150 }, height: { xs: 100, md: 150 } }}
              image={HandshakeSvg}
              alt="Live from space album cover"
            />
            <CardContent>
              <Typography
                sx={{
                  fontSize: {
                    xs: 40,
                    md: 56,
                    xl: 62,
                  },
                  fontWeight: 600,
                }}
                color="#fff"
              >
                12
              </Typography>
              <Typography
                s
                sx={{
                  fontSize: {
                    xs: 18,
                    md: 20,
                    xl: 32,
                  },
                  color: '#DADADA',
                  fontWeight: 600,
                }}
              >
                Партнеров
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Statistics;
