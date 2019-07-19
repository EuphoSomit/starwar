import * as actionType from '../constants/constant.action';

const defaultState = {
  planetList: [],
  filterPlanet: []
};

const planetsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_PLANET_LIST_REQUESTED:
      return {
        ...state
      };

    case actionType.GET_PLANET_LIST_SUCCESS:
      return {
        ...state,
        planetList: action.payload
      };

    case actionType.GET_PLANET_LIST_FAILURE:
      return {
        loading: false
      };

    case actionType.GET_PLANET_DETAILS_REQUESTED:
      return {
        ...state,
        filterPlanet: state.planetList.filter(
          planet => planet.name === action.payload
        )
      };

    default:
      return state;
  }
};

export default planetsReducer;
