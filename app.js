const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
app.use(cors());



const usersRouter = require('./routes/users.js')
app.use("/users", usersRouter)




app.use((req, res)=>{
res.json({
    message: "hello there!"
})
})
app.listen(port, ()=>{
    console.log(`Listening to port ${3000}`)
})