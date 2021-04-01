const router = require('express').Router();

const apiRoutes = require('../controllers/api');
const homeRoutes = require('../controllers/homeRoutes');
// const dashboardRoutes = require('../controllers/dashboardRoutes');

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;