import React from 'react';
import styled from 'styled-components';
import InfoboxWithIcon from './InfoboxWithIcon';
import { globalTheme } from '../utlities/globalTheme';
import { Coffee } from '@styled-icons/fa-solid/Coffee';
import { MusicNoteBeamed } from '@styled-icons/bootstrap/MusicNoteBeamed';
import { Food } from '@styled-icons/fluentui-system-filled/Food';

/* ========== STYLES ========== */
const StyledOverview = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .overview-icon {
    height: 2rem;
    color: ${globalTheme.back1};
  }
  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

/* ========== COMPONENT ========== */
const Overview = () => {
  const info = [
    {
      iconSvg: <Coffee className="overview-icon" />,
      title: 'Artisanal Coffee',
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
    <StyledOverview>
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
    </StyledOverview>
  );
};

export default Overview;
