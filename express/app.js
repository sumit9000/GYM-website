const express = require("express")
const app = express();
const port =80;
app.get=("/this",(req,res)=>{
res.status(400).send("this page is not found")
});
app.listen(port,()=>{
    console.log(`the application started succesfully on port ${port}`)
})