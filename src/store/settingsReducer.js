const settingsReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_EDITING_BAR':
      console.log('Toggling isEditingBarOpen');
      return {
        ...state,
        isEditingBarOpen: !state.isEditingBarOpen,
      };
    case 'TOGGLE_CONTENT_EDITABLE':
      console.log('Toggling isContentEditable');
      return {
        ...state,
        isContentEditable: !state.isContentEditable,
      };
    default:
      return state;
  }
};
export default settingsReducer;
