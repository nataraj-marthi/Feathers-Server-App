const players = require('./players/players.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(players);
};
