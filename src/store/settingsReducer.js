const settingsReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_EDITING_BAR':
      console.log('Toggling Edit Bar');
      return {
        ...state,
        isEditingBarOpen: !state.isEditingBarOpen,
      };
    default:
      return state;
  }
};
export default settingsReducer;
