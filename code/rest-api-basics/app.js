const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

app.routes('/feed', feedRoutes);

app.app.listen(8080);
