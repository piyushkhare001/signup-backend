const bcrypt = require('bcrypt');
const user = require("../models/user")


// sign up 
exports.sigup = async ( req , res) => {
    try{
  const { name , email , password ,role } = req.body;
  const existinguser = await user.findOne({email})
   
  if(existinguser){
     return res.status(400).json({
        success:false,
        message:'user already exits'
     });


  }
       // password securre
       let hashedpassword;
       try{ 
     hashedpassword =await bcrypt.hash()
       }catch(err){
          return  res.status(500).json({
            success:false,
            message:"erroe in hashing password"
          })
        }
         //create user  entry
         const user = await user.create({
            name, password , email , role
         })
         return res.status(200).json({
            success:true,
            message:"entry created successfully"
         })
    }
    catch(err){
     console.log(err);
     return res.status(500).json({
        success:false,
        message:"please try agail latter"
     });
    }
}




