const logger = (req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method} ${req.path}`);
  next();
}

module.exports = { logger };