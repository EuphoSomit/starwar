import {
  GET_PLANET_DETAILS_REQUESTED,
  GET_PLANET_LIST_REQUESTED
} from '../constants/constant.action';

export function getPlanetList() {
  return {
    type: GET_PLANET_LIST_REQUESTED
  };
}

export function getPlanetDetails(name) {
  return {
    type: GET_PLANET_DETAILS_REQUESTED,
    payload: name
  };
}
