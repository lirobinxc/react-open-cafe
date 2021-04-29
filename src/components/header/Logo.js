import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Coffee } from '@styled-icons/material-twotone/Coffee';
import { globalTheme } from '../../utlities/globalTheme';

/* ========== STYLES ========== */
const LogoWrapper = styled.div`
  color: ${globalTheme.font1};
  display: flex;
  align-items: center;
  h1 {
    font-size: 2rem;
    &.first {
      color: ${globalTheme.font2};
    }
  }
`;
export const StyledLogo = styled(Coffee)`
  color: ${globalTheme.font2};
  height: 2.5rem;
  margin: 10px 0;
  margin-right: 2px;
`;

/* ========== COMPONENT ========== */
const Logo = ({ companyFirstName = 'Open', companyLastName = 'Cafe' }) => {
  return (
    <LogoWrapper>
      <StyledLogo />
      <h1 id="logo" className="first">
        {companyFirstName}
      </h1>
      <h1 id="logo">{companyLastName}</h1>
    </LogoWrapper>
  );
};

export default Logo;

/* ========== PROPTYPES ========== */
Logo.propTypes = {
  companyFirstName: PropTypes.string,
  companyLastName: PropTypes.string,
};
