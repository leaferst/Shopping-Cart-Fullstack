const express = require('express');
const userRouter = express.Router();

//instead of app.get, it's userRouter
userRouter.get('/', (req, res) => {
    res.json(users);
});

module.exports = userRouter;