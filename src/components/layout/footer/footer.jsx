import { Container, Link } from './footer.style';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import MailSvg from './../../../assets/images/icon/footer/mail.svg';
import PhoneSvg from './../../../assets/images/icon/footer/phone.svg';
import MapSvg from './../../../assets/images/icon/footer/map.svg';
import ArrowSvg from './../../../assets/images/icon/footer/arrow.svg';

function Footer() {
  return (
    <Container id="footer">
      <Grid
        container
        sx={{
          borderBottom: '3px solid #fff',
          marginBottom: '30px',
          paddingBottom: '70px',
        }}
      >
        <Grid
          md={6}
          lg={4}
          sx={{
            display: 'flex',
            justifyContent: {
              sm: 'space-between',
              md: 'center',
            },
          }}
        >
          <Card
            sx={{
              backgroundColor: '#373737',
              boxShadow: 'none',
              marginTop: '90px',
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: {
                    xs: '26px',
                    sm: '34px',
                  },
                  color: '#fff',
                  fontWeight: '600',
                }}
              >
                Контактная информация
              </Typography>
              <Typography
                sx={{
                  fontSize: '26px',
                  color: '#959595',
                  marginTop: '45px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={MailSvg}
                  alt="Paella dish"
                  sx={{ width: '50px', height: '50px', marginRight: '15px' }}
                />
                test@mail.ru
              </Typography>
              <Typography
                sx={{
                  fontSize: '26px',
                  color: '#959595',
                  marginTop: '30px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={PhoneSvg}
                  alt="Paella dish"
                  sx={{ width: '40px', height: '40px', marginRight: '15px' }}
                />
                +7 (960) 000 46 12
              </Typography>
              <Typography
                sx={{
                  fontSize: '26px',
                  color: '#959595',
                  marginTop: '30px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={MapSvg}
                  alt="Paella dish"
                  sx={{ width: '30px', height: '43px', marginRight: '15px' }}
                />
                Архангельск, ул. Воронина 37
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          md={6}
          lg={4}
          sx={{
            display: 'flex',
            justifyContent: {
              sm: 'space-between',
              md: 'center',
            },
          }}
        >
          <Card
            sx={{
              backgroundColor: '#373737',
              boxShadow: 'none',
              marginTop: '90px',
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: {
                    xs: '26px',
                    sm: '34px',
                  },
                  color: '#fff',
                  fontWeight: '600',
                }}
              >
                Основные ссылки
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: '20px',
                    sm: '26px',
                  },
                  color: '#959595',
                  marginTop: '45px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={ArrowSvg}
                  alt="Paella dish"
                  sx={{ width: '20px', height: '25px', marginRight: '15px' }}
                />
                <Link to="/Main">Главная</Link>
              </Typography>
              <Typography
                sx={{
                  fontSize: '26px',
                  color: '#959595',
                  marginTop: '30px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={ArrowSvg}
                  alt="Paella dish"
                  sx={{ width: '20px', height: '25px', marginRight: '15px' }}
                />
                <Link to="/About">О нас</Link>
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: '20px',
                    sm: '26px',
                  },
                  color: '#959595',
                  marginTop: '30px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={ArrowSvg}
                  alt="Paella dish"
                  sx={{ width: '20px', height: '25px', marginRight: '15px' }}
                />
                <Link to="/Services">Услуги</Link>
              </Typography>
              <Typography
                sx={{
                  fontSize: '26px',
                  color: '#959595',
                  marginTop: '30px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={ArrowSvg}
                  alt="Paella dish"
                  sx={{ width: '20px', height: '25px', marginRight: '15px' }}
                />
                <Link to="/Projects">Проекты</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          md={6}
          lg={4}
          sx={{
            display: 'flex',
            justifyContent: {
              sm: 'space-between',
              md: 'center',
            },
          }}
        >
          <Card
            sx={{
              backgroundColor: '#373737',
              boxShadow: 'none',
              marginTop: '90px',
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: {
                    xs: '26px',
                    sm: '34px',
                  },
                  color: '#fff',
                  fontWeight: '600',
                }}
              >
                Социальные ссылки
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: '20px',
                    sm: '26px',
                  },
                  color: '#959595',
                  marginTop: '45px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={ArrowSvg}
                  alt="Paella dish"
                  sx={{ width: '20px', height: '25px', marginRight: '15px' }}
                />
                VK
              </Typography>
              <Typography
                sx={{
                  fontSize: '26px',
                  color: '#959595',
                  marginTop: '30px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={ArrowSvg}
                  alt="Paella dish"
                  sx={{ width: '20px', height: '25px', marginRight: '15px' }}
                />
                Twitter
              </Typography>
              <Typography
                sx={{
                  fontSize: '26px',
                  color: '#959595',
                  marginTop: '30px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={ArrowSvg}
                  alt="Paella dish"
                  sx={{ width: '20px', height: '25px', marginRight: '15px' }}
                />
                Telegram
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          md={6}
          lg={4}
          sx={{
            display: 'flex',
            justifyContent: {
              sm: 'space-between',
              md: 'center',
            },
            margin: '0 auto',
          }}
        >
          <Card
            sx={{
              backgroundColor: '#373737',
              boxShadow: 'none',
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#999',
                  fontWeight: '600',
                  alignItems: 'center',
                }}
              >
                © 2022. Все права защищены.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
