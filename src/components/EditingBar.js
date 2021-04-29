import React, { useContext } from 'react';
import styled from 'styled-components';
import store from '../store/store';
import { globalTheme } from '../utlities/globalTheme';
import Button from './Button';

/* ========== STYLES ========== */
const StyledEditingBar = styled.div`
  padding: 10px;
  background-color: rgb(255, 255, 255, 0.9);
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin: 0px;
    }
  }
  @keyframes slide-up {
    0% {
      bottom: -70px;
    }
    100% {
      bottom: 0px;
    }
  }
`;

const EditButton = styled(Button)`
  background-color: ${globalTheme.back2};
  color: ${globalTheme.font2};
  margin: 0 10px;
  &:hover {
    background-color: ${globalTheme.font2};
    color: ${globalTheme.back2};
  }
`;

/* ========== COMPONENT ========== */
const EditingBar = () => {
  const { state } = useContext(store);
  const SETTINGS = state;

  function undo() {
    document.execCommand('undo', false, null);
  }
  function redo() {
    document.execCommand('redo', false, null);
  }

  const styleForDisplayingEditingBar = {
    display: SETTINGS.isEditingBarOpen ? '' : 'none',
    animation: 'slide-up 0.5s ease-out',
  };

  return (
    <StyledEditingBar style={styleForDisplayingEditingBar}>
      <div className="wrapper">
        <EditButton name="Undo" handleClick={undo} />
        <p>
          <kbd>Ctrl-Z</kbd>
        </p>
      </div>
      <div className="wrapper">
        <EditButton name="Redo" handleClick={redo} />
        <p>
          <kbd>Ctrl-Y</kbd>
        </p>
      </div>
    </StyledEditingBar>
  );
};

export default EditingBar;
