import styled from 'styled-components';
import { Card } from '@mui/material';

// Дальше идут стили
export const Wrapper = styled.div`
  max-width: 1680px;
  margin: 250px auto;

  padding: 0 0 150px 0;

  background: linear-gradient(
    283.11deg,
    #4985ff -8.66%,
    rgba(255, 0, 229, 0.7) 46.2%,
    rgba(255, 122, 0, 0.81) 103.79%
  );
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export const Content = styled(Card)`
  && {
    width: 450px;
    height: 561.19px;

    background: rgba(255, 255, 255, 0.74);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    @media (max-width: 500px) {
      width: 350px;
      height: 430px;
    }

    @media (max-width: 380px) {
      width: 250px;
      height: 330px;
    }
  }
`;
