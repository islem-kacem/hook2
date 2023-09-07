const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('../models/FormData');
mongoose.connect('mongodb+srv://islem333:islem2002@cluster0.r6vtq1h.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected successfully to the database');
 
  })
  .catch((err) => {
    console.log('Error connecting to the database:', err);
  });

const app = express();
app.use(express.json());
app.use(cors());
const deploy_link="link eli bch te5dho b3d ma t3ml deploy lel backend 5lih kek lin tkml project "

app.post('/register', (req, res)=>{
    // To post / insert data into database

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

app.listen(3001, () => {
    console.log("Server listining on  ",deploy_link);

});