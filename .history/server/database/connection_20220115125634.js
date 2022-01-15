import  Mongoose  from "mongoose";

const Connection = async(userName,password) =>{
    try {
        await Mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.jhbak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        {
            useUnifiedTopology: true,
            useNewUrlParser : true
        }) 
        console.log('connection success'); 
    } catch (error) {
        console.log('failed to connect');
    }
}
export default Connection;