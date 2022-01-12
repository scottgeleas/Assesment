const router = require('express').Router();
const userRoutes = require('./userRoutes');
const departmentRoutes = require('./departmentRoutes')

router.use('/users', userRoutes);
router.use('/departments', departmentRoutes);

module.exports = router;
