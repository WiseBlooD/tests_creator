const {MongoClient, ServerApiVersion} = require("mongodb");


//const url = "mongodb+srv://wiseblood:qwerty123@cluster0.cncfnue.mongodb.net/?retryWrites=true&w=majority";

const url = "mongodb+srv://wiseblood:qwerty123@testsconstructor.vsbvrnn.mongodb.net/?retryWrites=true&w=majority&appName=TestsConstructor"
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
 const connectToDatabase = async () => {
    try {
        const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
        await client.connect();
        return client.db();
    } catch (error) {
        throw error;
    }
};
 const insertDocument = async (collectionName, document) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        await collection.insertOne(document);
    } catch (error) {
        throw error;
    }
};

 const findDocuments = async (collectionName, query) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        return await collection.find(query).toArray();
    } catch (error) {
        throw error;
    }
};

 const deleteDocument = async (collectionName, query) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        await collection.deleteOne(query);
    } catch (error) {
        throw error;
    }
};


module.exports = {
    connectToDatabase,
    insertDocument,
    findDocuments,
    deleteDocument,

};
