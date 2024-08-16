const { MongoClient } = require("mongodb");

const url = "mongodb+srv://pravalikabojja0205:IUfpD6MMGccVam1g@clustermongodb.yydmg3j.mongodb.net/"
const client = new MongoClient(url);

async function RegisterCred(Username, Password, Name, City, alertT) {
    try {
        await client.connect();

        const db = client.db('WeatherSenseDB');
        const col = db.collection('LoginAuthentication');

        const query = { 'Username': Username, 'Password': Password, 'Name': Name, 'City': City, 'AlertT': alertT };
        const result = await col.findOne(query);

    
        if (result) {
            return 1;
        } else {
            const result = await col.insertOne(query);
            if (result) {
                return 2;
            } else {
                return 0
            }
        }
    }
    finally {
        await client.close();
    }

}


module.exports = { RegisterCred };


