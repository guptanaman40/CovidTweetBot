const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { urlencoded } = require('body-parser');


dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended:false}));

app.get("/", (req,res)=>{
    res.status(200).json({message:"all's good here"})
});

// setting up api routes

const bot_routes = require('./api/routes/bot_routes');
app.use("/api", bot_routes);


module.exports = app ; 