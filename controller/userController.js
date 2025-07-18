const userService = require('../service/userService');

class UserController {
  createUser(req, res) {
    const userData = req.body;
    const user = userService.createUser(userData);
    res.status(201).json(user);
  }

  getAllUsers(req, res) {
    const users = userService.getAllUsers();
    res.json(users);
  }
}

module.exports = new UserController();

