
const MongoClient = require("mongodb").MongoClient

const EmployeeData = require("./data.json")

const Connection = 'mongodb://127.0.0.1:27017'

MongoClient.connect(Connection,async(err,db)=>{
    if (err) 
{console.log("Error While Conecting",err)
return
}
const database = db.db("HmanResources")
const data = database.collection("Employee")
console.log("Conected To Mongo-Data-Base")

const insert = await database.collection("Employee").insertMany(EmployeeData)
console.log(insert)

const finding = await data.find().toArray()
console.log(finding);

const salaryfind = await data.find({salary:{$gt:"30000"}}).toArray()
console.log(salaryfind);

const Experience2 = await data.find({overallExp:{$gt:"2"}}).toArray()
console.log(Experience2);

const GraduateExp = await data.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}}).toArray()
console.log(GraduateExp);

const updatesalary = await data.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}})
console.log(updatesalary);

const Delete = await data.deleteMany({lastCompany:'Y'})
console.log(Delete)

})
