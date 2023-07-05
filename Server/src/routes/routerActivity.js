const { Router } = require('express');
const { getActivities } = require('../controllers/getActivities');
const { postActivity } = require('../controllers/postActivity')

const routerActivity = Router();


routerActivity.post("/",postActivity);

routerActivity.get("/",getActivities);

module.exports = {
    routerActivity,
}