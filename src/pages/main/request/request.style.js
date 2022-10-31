import styled from 'styled-components';
import { TextField } from '@mui/material';

// Дальше идут стили
export const Container = styled.div`
  max-width: 1380px;
  margin: 150px auto 0;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1535px) {
    margin: 150px 120px 0;
  }

  @media (max-width: 1000px) {
    margin: 150px 40px 0;
  }

  @media (max-width: 850px) {
    margin: 150px 20px 0;
  }
`;

export const TextFieldNew = styled(TextField)`
  && {
    width: 550px;
    height: 65px;
    border-radius: 6px;

    transition: 0.3s all 0s ease-in-out;

    @media (max-width: 1535px) {
      width: 450px;
    }

    @media (max-width: 1200px) {
      width: 300px;
    }

    @media (max-width: 400px) {
      width: 200px;
    }
  }
`;

export const TextFieldFull = styled(TextField)`
  && {
    width: 1220px;
    border-radius: 6px;

    transition: 0.3s all 0s ease-in-out;

    @media (max-width: 1535px) {
      width: 900px;
    }

    @media (max-width: 1200px) {
      width: 650px;
    }

    @media (max-width: 900px) {
      width: 300px;
    }

    @media (max-width: 400px) {
      width: 200px;
    }
  }
`;
