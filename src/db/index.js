import mongoose from  "mongoose"

const connectDB =  async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`mongo connected in${connectionInstance.connection.host} ${process.env.PORT}`);
    } catch (error) {
        console.log("Mongo db correction error", error);
        process.exit(1)
    }
}
  export default connectDB
