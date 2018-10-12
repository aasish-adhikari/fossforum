const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-120528.oktapreview.com',
  token: '00piYF0QjmRJ94e5bTQuQ2Sp4ZYrO7zRFNlJis6jtk'
});

module.exports = client;
