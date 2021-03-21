import express from 'express'
var router = express.Router();
import userControllers from '../controllers/user.controller'
import userServices from '../services/user.services';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/exercise/new-user', function(req: express.Request, res: express.Response) {
  userControllers.createUser(req, res)
});


export default router
