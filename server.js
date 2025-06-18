const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const leadsRoute = require('./routes/leads');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('⚡ MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/leads', leadsRoute);

app.get('/', (req, res) => res.send('Adzo Media API is live'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
