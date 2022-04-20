const routes = require("next-routes")();

routes
  .add("/campaigns/new", "/new") // render new page if this link is visited. I have not setup my routes like '/campaigns/new
  .add("/campaigns/:address", "/show") // renders show page
  .add("/campaigns/:address/requests", "requests/index") //renders index.js in requests folder when the user visits campaign requests
  .add("/campaigns/:address/addrequest", "requests/addrequest");
module.exports = routes;
