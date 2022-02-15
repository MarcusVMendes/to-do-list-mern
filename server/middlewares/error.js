// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: 'Internal server error' });
};
