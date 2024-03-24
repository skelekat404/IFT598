// Student Name: Morgan Cividanes
// Student ID: 1214955807
// Date: March 24 2024
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}]`);
    next();
  };
  
  module.exports = loggerMiddleware;