const routes = require("next-routes")();

routes
  .add("/campaigns/new", "/new") // render new page if this link is visited. I have not setup my routes like '/campaigns/new
  .add("/campaigns/:address", "/show"); // renders show page

module.exports = routes;
