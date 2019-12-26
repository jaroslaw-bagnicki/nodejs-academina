/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const loggerMiddleware = (req, res, next) => {
    const { url, method} = req;
    const time = new Date().toTimeString().substr(0, 8);
    console.log(`[${time}] ${method} on ${url}`);
    next();
};

module.exports = loggerMiddleware;
