import  Mongoose  from "mongoose";

const Connection = async(user,pass) =>{
    try {
        await Mongoose.connect(`mongodb+srv://${user}:sahil801@cluster0.jhbak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        {
            useUnifiedTopology: true,
            useNewUrlParser : true
        }) 
        console.log('connection success'); 
    } catch (error) {
        console.log('failed to connect');
    }
}
export default Connection