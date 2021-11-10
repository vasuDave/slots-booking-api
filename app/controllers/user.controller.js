const User = require("../model/user.model");

//Save User Data
exports.create = async (req, res) => {
  // //Validate request
  // if(!req.body.firstName){
  //     return res.status(400).send({
  //         message:"Information Can not Empty"
  //     })
  // }

  // crate User Information
  const users = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mobile: req.body.mobile,
  });

  //SAve user information
  try {
    const saveUser = await users.save();
    res.status(200).json(saveUser);
  } catch (err) {
    res.status(500).json(err);
  }
  // .then(data=>{
  //     res.send(data);
  // }).catch(err=>{
  //     res.status(500).send({
  //         message:err.message|| "Some error occurred while Save User Details."
  //     })
  // })
};
//Find One Data using user
exports.findOne = (req, res) => {};

// Update a user identified by the userId in the request
exports.update = (req, res) => {};
