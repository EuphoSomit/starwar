let _sessionToken = sessionStorage.getItem('_sessionToken');

export const token = {
  getToken,
  setToken,
  setTokenInRequest
};

/**
 * Description: login request
 * @param {null}
 * @return {null}
 */
function setToken(token) {
  _sessionToken = token;
  sessionStorage._sessionToken = token;
}

/**
 * Description: logout request
 * @param {null}
 * @return {null}
 */
function getToken() {
  return _sessionToken;
}

/**
 * Description: login request
 * @param {null}
 * @return {null}
 */
function setTokenInRequest(requestData = {}) {
  if (!_sessionToken) return requestData;
  requestData['sessionToken'] = _sessionToken;
  return requestData;
}
