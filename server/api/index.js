
const express = require('express');
// Handlers.
const block = require('./block');

// Setup subrouter for /api routes.
const router = express.Router();

// Connect the routes with the handlers.
router.get('/address/:hash', block.getAddress);
router.get('/block/:hash', block.getBlockByHash);
router.get('/coin', block.getCoin);
router.get('/coin/history', block.getCoinHistory);
router.get('/peer', block.getPeer);
router.get('/peer/history', block.getPeerHistory);
router.get('/tx/latest', block.getTXLatest);
router.get('/tx/:hash', block.getTX);

module.exports =  router;
