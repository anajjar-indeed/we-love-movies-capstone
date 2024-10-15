
const notFound = (req, res, next) => {
  const error = {
    status: 404,
    message: `Path not found: ${req.originalUrl}`
  };
  next(error);
};

module.exports = notFound;
