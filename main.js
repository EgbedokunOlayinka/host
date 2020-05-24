const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() =>{
    console.log(`Database connected successfully`);
}).catch((err) =>{
    console.log(`Database connection error`, err)
});

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoute = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const consumerRoutes = require('./routes/consumerRoutes')

app.use('/api/v1', userRoute, consumerRoutes);
app.use('/api/v1', adminRoutes);

app.get('/', (req, res) =>{
    res.send('Everything online e-commerce application')
});

// Express Server 
port = process.env.PORT
app.listen(port, () =>{
    console.log(`Server running on PORT: ${port}`)
});