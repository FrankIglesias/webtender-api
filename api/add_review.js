const supabase = require('../database');

module.exports = async (req, res) => {
  const {status, data, error} = await supabase
  .from('Review')
  .insert([req.body])
  res.status(status).send(data || error);
}
