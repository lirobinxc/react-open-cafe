import styled from 'styled-components';
import { globalTheme } from '../utlities/globalTheme';

const StyledNavbar = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: ${globalTheme.white};
        font-size: 1.2rem;
        font-weight: 500;
        text-decoration: none;
        padding: 0.5rem 1rem;
        margin: 10px 0;
      }
    }
  }
`;

const NavbarMenu = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default NavbarMenu;
