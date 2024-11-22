"use strict";

const express = require('express');
const http = require('http');
const cors = require('cors');

const userRouter = require('./routes/user.route');
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer();
const app = express();
const server = http.createServer(app);  // Set up HTTP server






// Middleware and Routes setup
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.none());

const start = (port) => {
  server.listen(port, () => console.log(`Up running on port ${port}`));
};

// Export the broadcastEvent function for use in other modules
module.exports = {
  start,
  app,
};
