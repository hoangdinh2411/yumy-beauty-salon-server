const  express = require("express");
const  bodyParser  = require('body-parser');
const  mongoose = require('mongoose');
const  cors = require('cors');
const  dotenv = require('dotenv');

const userRouter = require('./route/user.js');
const serviceRoute = require('./route/service.js');
const categoryRoute = require('./route/category.js');
const couponsRoute = require('./route/coupons.js');
const staffsRoute = require('./route/staffs.js');

const app = express();

dotenv.config();

app.use(bodyParser.json({limit:'30mb', extended : true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended : true}));
app.use(cors());


app.use('/users', userRouter)
app.use('/services', serviceRoute)
app.use('/category', categoryRoute)
app.use('/coupons', couponsRoute)
app.use('/staffs', staffsRoute)
app.use('/', (req,res)=>{
	res.send({message:"Welcome"})
})

const PORT = process.env.PORT || 5001
mongoose
    .connect("mongodb+srv://hoang2411:hoang2411@yumybeauty.rk0xb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))
    })
    .catch(err=>{
        console.log(err.message)
    })
