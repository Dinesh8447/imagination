import mongoose,{Mongoose} from "mongoose";

const db_url = process.env.MONGODB_URL

interface MongooseConnection{
    conn:Mongoose | null;
    promise:Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached){
    cached = (global as any).mongoose={
        conn:null,promise:null
    }
}


export const ConnectToDatabase = async ()=>{
    if(cached.conn) return cached.conn
    if(!db_url) throw new Error("mongodb url not defined")
    cached.promise = cached.promise || mongoose.connect(db_url,{dbName:"imaginify",bufferCommands:false})
    cached.conn = await cached.promise
    return cached.conn

}