const favorites = (state = { ids: [], list: [], reorderd: false }, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const addNewState = { ...state };
      if (addNewState.ids.find(id => id === action.city.id) > -1) {
        return state;
      }
      addNewState.ids = [...addNewState.ids, action.city.id];
      addNewState.list = [...addNewState.list, action.city];
      if (addNewState.reorderd === false) {
        addNewState.list = sort(addNewState.list);
      }
      return addNewState;
    case "REMOVE_FROM_FAVORITES":
      const removeNewState = { ...state };
      removeNewState.ids = removeNewState.ids.filter(id => id !== action.id);
      removeNewState.list = removeNewState.list.filter(
        item => item.id !== action.id
      );
      return removeNewState;
    case "REORDER_FAVORITES":
      const reorderNewState = { ...state };
      reorderNewState.reorderd = true;
      reorderNewState.list = reorder(
        reorderNewState.list,
        action.startIndex,
        action.endIndex
      );
      return reorderNewState;
    default:
      return state;
  }
};

export default favorites;

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const sort = list => list.sort((a, b) => a.main.temp - b.main.temp);
