
const{MongoClient}=require('mongodb');
const url="mongodb://localhost:27017";
const database="student1";

const client=new MongoClient(url);

const dbConnection=async ()=>{
let result=await client.connect();
const db=await result.db(database);
return db.collection('profile1')

}

module.exports =dbConnection;