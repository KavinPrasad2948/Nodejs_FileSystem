const mongoose = require('mongoose');

const Password = '2HkkLArhqbP4RqoR'
const dbURL =`mongodb+srv://kavinprasad2948:${Password}@hallbooking.lokd4tl.mongodb.net/`

mongoose.connect(dbURL)
.then(()=>{
    console.log("Data Base Connected Successfully");
})

.catch((error)=>{
    console.log(error);
})