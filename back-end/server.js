// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { connectToDb } = require('./database/conn');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));

app.use(bodyParser.json());

app.use(cookieParser());

connectToDb()
.then(() => {
    //use cookie-parser middleware

    // user userRoutes
    app.use('/api/', userRoutes);
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start the server:', error);
    process.exit(1);
  });
