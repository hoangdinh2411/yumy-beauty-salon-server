import jwt from 'jsonwebtoken';
const auth = async(req, res, next)=>{
    try {
        const roll = req.headers.authorization.split(' ')[1];
        console.log(roll)
        // let decodedData ;
        // if(token ){
        //     decodedData = jwt.verify(token, '')
        // }

    } catch (error) {
        console.log(error)
    }
}

module.exports=  auth