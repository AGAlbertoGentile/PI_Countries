const { Router } = require("express");
const {routerCountries} = require ('../routes/routerCountries');
const {routerActivity} = require ('../routes/routerActivity');

const router = Router();

router.use("/countries",routerCountries);

router.use("/activity",routerActivity);


module.exports = router;
