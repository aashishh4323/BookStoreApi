require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db'); 
const bookRoutes = require(`./routes/BookRoutes`);
const app = express();

const port = process.env.PORT || 3000;


connectToDB();

app.use('/api/books',bookRoutes);

app.get('/', (req, res) => {
  res.send('✅ Server and DB connection successful!');
});

app.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}`);
});
