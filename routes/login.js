const express=require('express');

const router=express.Router();

router.get('/login',(req,res)=>{
    res.send('<form action="/" method="GET" onSubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"><input id="username" type="text" name"title"><button type="submit">Login</button></form>')
});

module.exports=router;
