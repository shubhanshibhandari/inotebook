var jwt=require('jsonwebtoken');
const JWT_SECRET = "Anick@Bhattacharya";

const fetchuser= (req,res,next)=>{
    //get the user from jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: 'Invalid token'});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).send({error: 'Invalid token'+error.message});
    }
    
}

module.exports = fetchuser;