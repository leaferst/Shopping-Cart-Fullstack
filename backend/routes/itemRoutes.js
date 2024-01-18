const express = require('express');
const itemRouter = express.Router();
const itemController = require('../controllers/itemController');

itemRouter.get('/', itemController.getAllItems);
// itemRouter.get('/:id', itemController.getAItem);
// itemRouter.delete('/:id', itemController.deleteItem);

module.exports = itemRouter;