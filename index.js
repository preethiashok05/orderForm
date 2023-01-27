const express = require('express')
const app=express()
const cors = require("cors");
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');

const orders = require('./model/order');
const customer = require('./model/customer');
const payment = require('./model/payment');
require('./model/database')

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/' , (req,res)=>{
    res.render('./orders');
})


app.post('/order' , async (req,res,next)=>{
    
    const p_name = req.body.p_name;
    const _price = req.body.price;
    const id = req.body.id;
    try{
        const data = await orders.create({
            product_name:p_name,
            price:_price,
            orderid:id
        });
        if(data) {
            console.log("order data added")
            res.render('./userDetails');

        }
        else return res.json('failed to add data to the database')
    }catch(ex){
        next(ex);
    }
   
})

app.post('/user' , async (req,res ,next) =>{
    const name = req.body.username;
    const email = req.body.email;
    const phone = req.body.ph_number;
    const address = req.body.address;
    try{
        const data = await customer.create({
            username:name,
            email:email,
            number:phone,
            address:address
        });
        if(data) {
            console.log("success");
            res.render('./payment');
        }
        else return res.json('failed to add data to the database');
    }catch(ex){
        next(ex);
    }
})

app.post('/payment' , async (req,res ,next) =>{
    try{
        const data = await payment.create({
            done:true,
        });
        if(data) {
            console.log("success");
            return res.json("payment successful , order placed");
        }
        else return res.json('failed to add data to the database')
    }catch(ex){
        next(ex);
    }
})


app.listen(port,()=> console.log("started at port" + port))