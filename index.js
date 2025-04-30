const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// استدعاء الراوت من ملف خارجي
const skipcashRoutes = require('./routes/skipcash');
app.use('/api/skipcash', skipcashRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Skipcash API Server is running!' });
});

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
