const MongoClient = require('mongodb').MongoClient;

let staffCollection;

function startDb(url,callback){
    MongoClient.connect(url, (err,db) => {
        if(err) throw new Error('Connection error');

        staffCollection = db.collection('members');
        console.log("DB created");
        callback();
    })
}

module.exports = {
    startDb
}