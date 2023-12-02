const express=require('express');
const morgan =require('morgan');//if the app is unser production....detailed logs will be skipped as morgan is skipped
const app=express();
const cors = require('cors'); 
const productroute=require('./routes/productroute');
const cartroute=require("./routes/cartroute");
// const userrouter=require('./routes/userroutes');
// const tablerouter=require('./routes/tableroutes')

//Middleware
// console.log("hi");
if(process.env.NODE_ENV==="development")
{
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/page`));
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
  });

  app.use(cors());
  
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use('/products',productroute);
  app.use('/cart',cartroute);

  module.exports=app;



