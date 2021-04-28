import styled from 'styled-components';
import { globalTheme } from '../utlities/globalTheme';
import Logo from './Logo';
import NavbarMenu from './NavbarMenu';
import Showcase from './Showcase';

const StyledHeader = styled.header`
  height: 100vh;
  .navbar {
    padding: 20px;
    background-color: rgb(0, 0, 0, 0);
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    /* background-color: ${globalTheme.back1}; */
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="navbar">
        <Logo />
        <NavbarMenu />
      </div>
      <Showcase />
    </StyledHeader>
  );
};

export default Header;
