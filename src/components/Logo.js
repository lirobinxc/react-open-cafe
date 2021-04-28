import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Coffee } from '@styled-icons/material-twotone/Coffee';
import { globalTheme } from '../utlities/globalTheme';

/* ========== STYLES ========== */

const LogoWrapper = styled.div`
  color: ${globalTheme.font1};
  display: flex;
  align-items: center;
  h1 {
    font-size: 2rem;
    span {
      color: ${globalTheme.font2};
    }
  }
`;
export const StyledLogoArt = styled(Coffee)`
  color: ${globalTheme.font2};
  height: 2.5rem;
  margin: 10px 0;
  margin-right: 2px;
`;

/* ========== COMPONENT ========== */
const Logo = ({ companyFirstName = 'Open', companyLastName = 'Cafe' }) => {
  return (
    <LogoWrapper>
      <StyledLogoArt />
      <h1>
        <span>{companyFirstName}</span>
        {companyLastName}
      </h1>
    </LogoWrapper>
  );
};

export default Logo;

/* ========== PROPTYPES ========== */
Logo.propTypes = {
  companyFirstName: PropTypes.string,
  companyLastName: PropTypes.string,
};
