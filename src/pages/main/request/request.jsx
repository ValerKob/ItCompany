import { Container, TextFieldNew, TextFieldFull } from './request.style';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';

import { ButtonAbout } from './../../../styles/global.style';

function Request() {
  return (
    <Container>
      <Card
        sx={{
          textAlign: 'center',
          boxShadow: 'none',
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: {
                xs: '24px',
                sm: '36px',
              },
              color: '#000',
            }}
          >
            Оставьте заявку
          </Typography>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: {
                xs: '16px',
                sm: '20px',
              },
              color: '#999',
              marginTop: '20px',
            }}
          >
            Полезные статьи, акции, новости - получите все это сейчас!
          </Typography>
          <Typography variant="body2">
            <Grid container spacing={2} sx={{ marginTop: '70px' }}>
              <Grid xs={12} md={6} sx={{ marginBottom: '30px' }}>
                <TextFieldNew id="outlined-basic" label="Введите ваше имя" />
              </Grid>
              <Grid xs={12} md={6} sx={{ marginBottom: '30px' }}>
                <TextFieldNew
                  id="outlined-basic"
                  label="Введите вашу фамилию"
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
                sx={{
                  marginBottom: {
                    md: 0,
                    xs: '30px',
                  },
                }}
              >
                <TextFieldNew id="outlined-basic" label="Введите ваш email" />
              </Grid>
              <Grid xs={12} md={6}>
                <TextFieldNew
                  id="outlined-basic"
                  label="Введите номер телефона"
                />
              </Grid>
              <Grid xs={12} sx={{ marginTop: '30px' }}>
                <TextFieldFull
                  id="outlined-multiline-static"
                  label="Введите сообщение"
                  multiline
                  rows={6}
                />
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
        <CardActions sx={{ flexDirection: 'column' }}>
          <ButtonAbout
            About
            variant="contained"
            sx={{
              margin: {
                xs: '50px 5px 30px 0',
                sm: '50px auto 30px',
              },
              minWidth: {
                xs: '150px',
                sm: '220px',
              },
              minHeight: {
                xs: '70px',
              },
            }}
          >
            Оставить заявку
          </ButtonAbout>
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: {
                xs: '14px',
                sm: '16px',
              },
              color: '#999',
            }}
          >
            Мы не шлем спам, и передаем никому ваши данные.
          </Typography>
        </CardActions>
      </Card>
    </Container>
  );
}

export default Request;
