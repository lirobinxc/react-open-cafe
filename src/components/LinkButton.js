import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { globalTheme } from '../utlities/globalTheme';

/* ========== STYLES ========== */
const StyledLinkButton = styled.a`
  background-color: ${globalTheme.font1};
  border-radius: 5px;
  color: ${globalTheme.back1};
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.4em 1em;
  margin: 10px 0;
  &:hover {
    background-color: ${globalTheme.back1};
    color: ${globalTheme.font1};
    transition: 0.1s;
  }
`;

/* ========== COMPONENT ========== */
const LinkButton = ({ className, href, name }) => {
  return (
    <StyledLinkButton className={className} href={href}>
      {name}
    </StyledLinkButton>
  );
};

export default LinkButton;

/* ========== PROPTYPES ========== */
LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
