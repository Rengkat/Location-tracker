function Reducer(state, action) {
  if (action.type === "TOGGLE_SIDEBAR") {
    return { ...state, isSideBarOpen: !state.isSideBarOpen };
  }

  return state;
}

export default Reducer;
