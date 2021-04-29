import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { globalTheme } from '../utlities/globalTheme';

/* ========== STYLES ========== */
const StyledInfoboxWithIcon = styled.div`
  background: ${globalTheme.white};
  margin: 0px;
  min-height: 200px;
  padding: 20px;
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon {
  }
  h2 {
  }
  p {
    margin: 0;
  }
  @media all and (max-width: 768px) {
    min-height: 100px;
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
