const supabase = require('../database');

module.exports = async (req, res) => {
  const { data, status } = await supabase
     .from("Review")
     .select("*")
     .eq('place_id', req.query.place_id);
     console.log(data);
  res.status(status).send(data[0]);
}
