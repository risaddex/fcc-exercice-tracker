import express from 'express'
const router = express.Router()
import userControllers from '../controllers/user.controller'

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.post(
  '/exercise/new-user',
  function (req: express.Request, res: express.Response) {
    userControllers.createUser(req, res)
  }
)

router.get('/exercise/users', function (req, res) {
  userControllers.listUsers(req, res)
})

router.post(
  '/exercise/add',
  function (req, res) {
    userControllers.addExerciseToUser(req, res)
  }
)

router.get('/exercise/log', function (req, res) {
  userControllers.getUserLogs(req, res)
})

export default router
