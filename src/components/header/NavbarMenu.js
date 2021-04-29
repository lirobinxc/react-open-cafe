import { useState } from 'react';
import styled from 'styled-components';
import { globalTheme } from '../../utlities/globalTheme';

/* ========== STYLES ========== */
const StyledNavbar = styled.nav`
  ul {
    display: flex;
    flex-wrap: nowrap;
    li {
      list-style: none;
      justify-content: flex-end;
      button {
        background-color: rgb(0, 0, 0, 0);
        border: none;
        cursor: pointer;
        color: ${globalTheme.white};
        font-size: 1.2rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
        &:hover {
          color: ${globalTheme.font1};
        }
        &.current {
          color: ${globalTheme.font1};
        }
      }
    }
  }
  @media all and (max-width: 768px) {
    #navbar-home {
      display: none;
    }
  }
`;

/* ========== COMPONENT ========== */
const NavbarMenu = () => {
  const [current, setCurrent] = useState('Home');
  const items = ['Home', 'Menu', 'About', 'Blog', 'Contact'];

  return (
    <StyledNavbar>
      <ul>
        {items.map((ele) => {
          return (
            <li key={ele} contenteditable="false">
              <button
                id={`navbar-${ele.toLowerCase()}`}
                className={ele === current ? 'current' : null}
                onClick={() => {
                  setCurrent(ele);
                }}
              >
                {ele}
              </button>
            </li>
          );
        })}
      </ul>
    </StyledNavbar>
  );
};

export default NavbarMenu;
