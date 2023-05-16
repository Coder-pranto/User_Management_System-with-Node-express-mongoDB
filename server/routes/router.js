const express = require('express');
const router = express.Router();

const services = require('../services/render');

const {create,find,update,deletex} = require('../controller/controller');


/**
 *  @description Root Route
 *  @method GET /
 */
router.get('/', services.homeRoute);
router.get('/home', services.homeRoute);

/**
 *  @description for add user
 *  @method GET /add-user
 */
router.get('/add-user', services.add_user);
/**
 *  @description for update user
 *  @method GET /update-user
 */
router.get('/update-user', services.update_user);


//API
router.post('/api/users',create)
router.get('/api/users',find)
router.put('/api/users/:id',update)
router.delete('/api/users/:id',deletex)


module.exports = router;