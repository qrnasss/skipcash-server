const express = require('express');
const axios = require('axios');
const router = express.Router();

require('dotenv').config();

router.post('/create-payment', async (req, res) => {
  const { amount, name, email } = req.body;

  try {
    const response = await axios.post(
      'https://api.skipcash.app/api/payment-request',
      {
        amount: amount,
        currency: 'QAR',
        customer: {
          name: name,
          email: email,
        },
        redirectUrl: 'https://your-website.com/payment-success',
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SKIPCASH_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({ url: response.data.url });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'فشل في إنشاء الدفع' });
  }
});

module.exports = router;
