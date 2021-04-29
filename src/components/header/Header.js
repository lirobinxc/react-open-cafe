import styled from 'styled-components';
import { globalTheme } from '../../utlities/globalTheme';
import Logo from './Logo';
import NavbarMenu from './NavbarMenu';

/* ========== STYLES ========== */
const StyledHeader = styled.header`
  .navbar {
    padding: 20px;
    background-color: rgb(0, 0, 0, 0.3);
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    /* background-color: ${globalTheme.back1}; */
    @media all and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

/* ========== COMPONENT ========== */
const Header = () => {
  return (
    <StyledHeader>
      <div className="navbar">
        <Logo />
        <NavbarMenu />
      </div>
    </StyledHeader>
  );
};

export default Header;
