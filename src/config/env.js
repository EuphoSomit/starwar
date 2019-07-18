const dev = {
  ENV_URL: 'https://api.centivo.io/csr-dev/csr'
};

const demo = {
  ENV_URL: 'https://demo.csrportal.api.centivo.com/csr-demo/csr'
};

const prod = {
  ENV_URL: 'https://prod.csrportal.api.centivo.com/csr-prod/csr'
};

let config;

if (process.env.REACT_APP_ENV === 'production') {
  config = prod;
} else if (process.env.REACT_APP_ENV === 'demo') {
  config = demo;
} else {
  config = dev;
}

export default {
  // Add common config values here
  ...config
};
