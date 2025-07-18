const userRepository = require('../repository/userRepository');

class UserService {
  createUser(userData) {
    // You can add validation or business logic here
    const user = {
      id: Date.now(),
      ...userData
    };
    return userRepository.createUser(user);
  }

  getAllUsers() {
    return userRepository.getAllUsers();
  }
}

module.exports = new UserService();

