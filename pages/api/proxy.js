/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(404).json({message: 'Endpoint not found'});

    return;
  }

  const { cardTokenId } = req.body;

  try {
    const { data }  = await axios.post(
      'https://api.basistheory.com/proxy', 
      {
        card: `{{ ${cardTokenId} }}`,
      }, 
      {
        headers: {
          'BT-PROXY-URL': 'https://echo.basistheory.com/post',
          'BT-API-KEY': process.env.BASIS_THEORY_PRIVATE_KEY,
          'Content-Type': 'application/json'
        }
      });

    res.status(200).json(data.json);
  } catch (err) {
      console.error(err);
  }
}
