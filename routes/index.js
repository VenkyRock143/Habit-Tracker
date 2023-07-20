const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home_controller');
const habitController = require('../controllers/habit_controller');

console.log('router loaded');
router.get('/', homecontroller.home);
router.post('/create-habit', habitController.createHabit);
router.get('/delete-habit/', habitController.deleteHabit);
router.use('/details',require('./details'))


module.exports = router;