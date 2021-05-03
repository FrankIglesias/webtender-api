const axios = require('axios');

module.exports = async (req, res) => {
  const { place_id } = req.query;
  console.log(`[${new Date()}] - Search for ${place_id}`);
  const response = await axios.get(
    'https://maps.googleapis.com/maps/api/place/details/json',
    {
      params: {
        place_id,
        key: process.env.NODE_MAPS_SEARCH_API,
      },
    }
  );
  res.send(response.data);
};
