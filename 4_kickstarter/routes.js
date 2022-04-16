const routes = require("next-routes")();

routes.add("/campaigns/:address", "/show"); // renders show.js

module.exports = routes;
