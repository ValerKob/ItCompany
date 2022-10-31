import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Дальше идут стили
export const Container = styled.div`
  max-width: 1920px;
  background: #373737;
  margin: 150px 0 0 0;
  padding: 0 120px;

  transition: 0.3s all 0s ease-in-out;

  @media (max-width: 1000px) {
    padding: 0 40px;
  }

  @media (max-width: 850px) {
    padding: 0 20px;
  }

  @media (max-width: 400px) {
    padding: 0 0;
  }
`;

export const Link = styled(NavLink)`
  color: #959595;
  font-weight: 600;
  text-decoration: none;
`;
