import { baseService } from '../services/service';
import { uriConstants } from '../constants/constant.uri';

export function getPeople(data) {
  let url = uriConstants.GET_PEOPLE_API;
  const dataJson = JSON.stringify(data);
  return baseService.post(url, dataJson);
}

export function getPlanetList(data) {
  let url = uriConstants.GET_PLANETS_API;
  const dataJson = JSON.stringify(data);
  return baseService.post(url, dataJson);
}
