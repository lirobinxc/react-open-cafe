import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { globalTheme } from '../utlities/globalTheme';

/* ========== STYLES ========== */
const StyledInfoboxWithIcon = styled.div`
  background: ${globalTheme.white};
  margin: 0px;
  .icon {
  }
  h2 {
  }
  p {
    margin: 0;
  }
`;
/* ========== COMPONENT ========== */
const InfoboxWithIcon = ({ iconSvg, title, summary }) => {
  return (
    <StyledInfoboxWithIcon>
      <div className="icon">{iconSvg}</div>
      <h2>{title}</h2>
      <p>{summary}</p>
    </StyledInfoboxWithIcon>
  );
};

export default InfoboxWithIcon;

/* ========== PROPTYPES ========== */
InfoboxWithIcon.propTypes = {
  iconSvg: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
};
