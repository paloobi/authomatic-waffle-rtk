const express = require('express');
const prisma = require('../db/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {JWT_SECRET} = process.env;

const {requireUser} = require('../auth');

const router = express.Router();

// GET /api/users/me
router.get('/me', requireUser, async (req, res, next) => {
  if (!req.user?.id) {
    res.status(403).send({name: "NotAuthenticated"})
  } else {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id
      }
    })
    res.send({...user, password: undefined});
  }
});

// POST /api/users/login
router.post('/login', async (req, res, next) => {
  const {username, password} = req.body;

  const user = await prisma.user.findUnique({
    where: {
      username
    }
  });

  if (!user) {
    res.status(404).send({name: "UserNotFound"});
  } else {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      const token = await jwt.sign({id: user.id}, JWT_SECRET);
      res.send({token});
    } else {
      res.status(401).send({name: "InvalidCredentials"});
    }
  }
});

// POST /api/users/register
router.post('/register', async (req, res, next) => {
  const {username, password} = req.body;

  const existingUser = await prisma.user.findUnique({
    where: {
      username
    }
  });

  if (existingUser) {
    res.status(403).send({name: "UserExists"});
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await prisma.user.create({
        data: {
          username,
          password: hashedPassword
        }
      });
      const token = jwt.sign({id: user.id}, JWT_SECRET);
      res.send({token});
    } catch(e) {
      next(e);
    }
  }
});

module.exports = router;