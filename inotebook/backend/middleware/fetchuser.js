var jwt = require("jsonwebtoken");
const jwt_sec = "komalborate";

const fetchuser=(req,res,next)=>{
    //get user from jwt tokent add id to req object
    const token=req.header("auth-token")
    if(!token)
        {
            res.status(401).send({error:"please authenticate valid token"})
        }
        try {
            const data= jwt.verify(token,jwt_sec)
            req.user=data.user
             next();
            
        } catch (error) {
            res.status(401).send({error:"please authenticate valid token"})
        }
       
}

module.exports=fetchuser