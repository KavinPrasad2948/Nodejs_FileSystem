const mongoose = require('mongoose');

const Password = '0zlwemZR8LIlS71I'
const dbURL =`mongodb+srv://jcgccssiq:${Password}@kavin.mphmlun.mongodb.net/`

mongoose.connect(dbURL)
.then(()=>{
    console.log("Data Base Connected Successfully");
})

.catch((error)=>{
    console.log(error);
})