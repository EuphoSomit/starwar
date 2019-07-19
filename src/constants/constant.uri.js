export const API_DIRECTORY = { DOC_ROOT: '' };

export const urlConstants = {
  BASE_URL: process.env.REACT_APP_ENV_URL
};

export const API_INTERFACE = {
  GET_PEOPLE: '/people',
  GET_PLANETS: '/planets'
};

export const uriConstants = {
  GET_PEOPLE_API: urlConstants.BASE_URL + API_INTERFACE.GET_PEOPLE,
  GET_PLANETS_API: urlConstants.BASE_URL + API_INTERFACE.GET_PLANETS
};
