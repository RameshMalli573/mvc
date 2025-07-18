
// create a real DB connection and implement the user repository
// this is a simple in-memory repository for demonstration purposes

class UserRepository {
  constructor() {
    this.users = [];
  }

  createUser(user) {
    this.users.push(user);
    return user;
  }

  getAllUsers() {
    return this.users;
  }
}

module.exports = new UserRepository();

