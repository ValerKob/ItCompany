import { Wrapper, RectangleLeft, RectangleRight } from './title.style';
import { Typography } from '@mui/material';

function TitleBlock() {
  return (
    <Wrapper>
      <Typography
        sx={{
          fontWeight: '600',
          zIndex: '10',
          fontSize: {
            xs: '56px',
            sm: '72px',
          },
          color: '#fff',
          marginBottom: '125px',
          marginRight: {
            xs: '0',
            sm: '40px',
          },
        }}
      >
        Наши проекты
      </Typography>

      <RectangleLeft></RectangleLeft>
      <RectangleRight></RectangleRight>
    </Wrapper>
  );
}

export default TitleBlock;
