const login = (req, res) => {
  res.send("<h1>Login Successful!</h1</h1>,");
};

const register = (req, res) => {
  res.send("<h1>Regidter Herel!</h1</h1>,");
};

module.exports = {
  login,
  register,
};
