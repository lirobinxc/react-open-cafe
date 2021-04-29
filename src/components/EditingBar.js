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
  display: ${(props) => (props.isDisplayed ? 'flex' : 'none')};
  flex-wrap: wrap;
  animation: ${(props) => (props.isDisplayed ? 'slide-up 0.5s ease-out' : '')};
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
  @media all and (max-width: 768px) {
    .wrapper kbd {
      display: none;
    }
  }
`;

const EditButton = styled(Button)`
  background-color: ${globalTheme.back2};
  color: ${globalTheme.font2};
  margin: 0 10px;
  flex: 1;
  &:hover {
    background-color: ${globalTheme.font2};
    color: ${globalTheme.back2};
  }
`;

/* ========== COMPONENT ========== */
const EditingBar = () => {
  const { state, dispatch } = useContext(store);

  function undo() {
    document.execCommand('undo', false, null);
  }
  function redo() {
    document.execCommand('redo', false, null);
  }

  return (
    <StyledEditingBar isDisplayed={state.isEditingBarOpen}>
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
      <div className="wrapper">
        <EditButton
          name="Finish Editing"
          handleClick={() => dispatch({ type: 'TOGGLE_EDITING_BAR' })}
        />
      </div>
    </StyledEditingBar>
  );
};

export default EditingBar;
