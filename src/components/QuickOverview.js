import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InfoboxWithIcon from './InfoboxWithIcon';
import { globalTheme } from '../utlities/globalTheme';
import { Coffee } from '@styled-icons/fa-solid/Coffee';
import { MusicNoteBeamed } from '@styled-icons/bootstrap/MusicNoteBeamed';
import { Food } from '@styled-icons/fluentui-system-filled/Food';

/* ========== STYLES ========== */
const StyledQuickOverview = styled.div`
  .overview-icon {
    height: 2rem;
    color: ${globalTheme.back1};
  }
`;

/* ========== COMPONENT ========== */
const QuickOverview = () => {
  const info = [
    {
      iconSvg: <Coffee className="overview-icon" />,
      title: 'Artisnal Coffee',
      summary:
        'Only the finest Columbia and Arabica coffee beans are selected for roasting.',
    },
    {
      iconSvg: <MusicNoteBeamed className="overview-icon" />,
      title: 'Live Music',
      summary:
        'We support our talented local musicians. Open mic every Friday.',
    },
    {
      iconSvg: <Food className="overview-icon" />,
      title: 'Delicious Food',
      summary: 'Enjoy our freshly baked pastries and home-cooked dishes.',
    },
  ];

  return (
    <StyledQuickOverview>
      {info.map((ele) => {
        return (
          <InfoboxWithIcon
            key={ele.title}
            iconSvg={ele.iconSvg}
            title={ele.title}
            summary={ele.summary}
          />
        );
      })}
    </StyledQuickOverview>
  );
};

export default QuickOverview;
