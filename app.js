const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');
const providerRoutes = require('./routes/providerRoutes')

const app = express();
const port = process.env.PORT

 
console.log(port, process.env.MONGO_URL);
// Enable All CORS Requests
app.use(cors());

app.use(cors({
    origin: '*' // Allow only requests from this origin
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/uploads', express.static('uploads')); 

//connection to database
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });

app.use('/provider', providerRoutes )


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
