const router = require('express').Router();
const { getAllUsers, createnewUser} = require('../controllers/user');




router.post('/user', createnewUser);

router.get('/user', getAllUsers);


module.exports = router;
