const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { urlencoded } = require('body-parser');
const mongoose = require('mongoose');


dotenv.config();

const app = express();

//mongodb+srv://covid_help_dev.omc18.mongodb.net/
//:RA0U4RNVOQUCityE

// mongoose.connect("mongodb+srv://covid_help_dev:RA0U4RNVOQUCityE@cluster0.omc18.mongodb.net/covid_help_dev?retryWrites=true&w=majority",err=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("connected to mongo");
//     const Suppliers = mongoose.model('Suppliers', 
//                new mongoose.Schema({ url: String, text: String, id: Number}), 
//                'Suppliers'); 

//     Suppliers.find().exec().then(
//         doc=>console.log(doc)
//         .catch(err=> console.log(err))
//     );  

// })

// const collection = Object.keys(mongoose.connection.collections);

// console.log(collection);


// connection.on('open', function () {
//     connection.db.listCollections().toArray(function (err, names) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(names);
//       }

//       mongoose.connection.close();
//     });
// });

// const connectMongo = (mongoURI) => {
//     mongoose.connect(mongoURI, { useNewUrlParser: true , useUnifiedTopology: true });
//     mongoose.connection.on('open', function(){
//         console.log(mongoose.connection.db.suppliers.findOne())
//     })
//     mongoose.connection.on('error', (err) => {
//      if (err) console.log(err);

//     });
//    }

// connectMongo("mongodb+srv://covid_help_dev:RA0U4RNVOQUCityE@cluster0.omc18.mongodb.net/covid_help_dev?retryWrites=true&w=majority");
             

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