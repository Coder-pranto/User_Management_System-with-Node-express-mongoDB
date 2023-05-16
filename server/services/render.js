const axios = require('axios');

exports.homeRoute =  (req , res)=>{
     axios.get("http://localhost:8080/api/users",)
     .then((result) => {
      console.log(result);
      res.render('index.ejs',{user:result.data});
    
     }).catch((err) => {
      res.send(err);
     });
    
 
 }

 exports.add_user=  (req , res)=>{

    res.render('add_user.ejs');
 
 }
 
 exports.update_user=  (req , res)=>{
   axios.get("http://localhost:8080/api/users", { params : { id : req.query.id }})
   .then((result) => {
      res.render('update_user.ejs',{user: result.data});
   }).catch((err) => {
      res.send(err);
   });

 }

