const Userdb = require('../model/model');

//* create and save new user
exports.create =(req,res)=>{

// validate request
if(!req.body){
    res.status(400).send({ message : "Content can not be emtpy!"});
    return;
}
 // new user
 const user = new Userdb({
    name : req.body.name,
    email : req.body.email,
    gender: req.body.gender,
    status : req.body.status
})

// save user in the database
user
    .save(user)
    .then(data => {
       // res.send(data)
       res.redirect('/add-user');
    })
    .catch(err =>{
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    });

}

//* retrieve and return all users/ retrive and return a single user
exports.find =(req,res)=>{
   const qid = req.query.id; //do give an id in postman's query option
  
    if (qid) {
        Userdb.findById(qid)
        .then((result) => {
            if (!result) {
                 res.status(404).send({message:`Cannot find user with ${uid}.Maybe user not in database!`})
            } else {
                res.send(result);
            }
        }).catch((err) => {
            res.status(400).send({ message : err.message || "Error Occurred while retriving user information"})
        });
    } else {
        Userdb.find()
         .then((result) => {
            res.send(result)
         }).catch((err) => {
            res.status(400).send({ message : err.message || "Error Occurred while retriving user information"})
         });

        
    }
}

//* Update a new idetified user by user id
exports.update =(req,res)=>{
    const uid = req.params.id;
    Userdb.findByIdAndUpdate(uid,req.body,{useFindAndModify:false})
    .then((result) => {
        if(!result) res.status(404).send({message:`Cannot Update user with ${uid}.Maybe user not found!`})
        else res.send(result)
    }).catch((err) => {
        res.status(500).send({message:"Error Update user information"})
        
    });

}


//* Delete a user with specified user id in the request
exports.deletex =(req,res)=>{
    const uid = req.params.id;
    Userdb.findByIdAndDelete(uid)
    .then((result) => {
        if(!result) res.status(404).send({message:`Cannot Delete user id=${uid}.Maybe user not found!`})
        else res.send({message:"User was deleted succesfully"})
    }).catch((err) => {
        res.status(500).send({message:"Error Delete user information"})
        
    });

}