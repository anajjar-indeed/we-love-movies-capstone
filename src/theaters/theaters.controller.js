const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(request, response) {
  service.list().then(data => response.json({data}))
}

module.exports = {
  list: asyncErrorBoundary(list),
};
