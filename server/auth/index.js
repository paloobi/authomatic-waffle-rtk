const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env;

const authenticateJWT = async (req, res, next) => {
  const header = req.headers.authorization;

  if (header && header.startsWith('Bearer ')) {
    const token = header.slice(" ")[1];
    try {
      const {id} = jwt.verify(token, JWT_SECRET);
      req.user = {id};
      next();
    } catch(e) {
      next(e);
    }
  } else {
    next();
  }
}

const requireUser = (req, res, next) => {
  if (!req.user) {
    res.status(403).send({name: "MustBeLoggedIn"})
  } else {
    next();
  }
}

module.exports = {authenticateJWT, requireUser}