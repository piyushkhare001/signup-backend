const mongoose = require('mongoose')

require("dotenv").config()

exports.connect = () =>{
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewUrlParser :true , 
        useUnifiedTopology : true,
    })
    .then(()=>{console.log("DB connection stablished ✅");})
    .catch((err) => {
        console.log("DB connection issue❌");
        console.log(err);
        process.exit(1);
    } )
}