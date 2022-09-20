const { MongoClient, ServerApiVersion } = require('mongodb');
const { db } = require('./src/helper/connect');

function connectDB() {
	return new Promise((resolve, reject) => {
		const uri = ''
		console.log(uri)
		const client = new MongoClient(
			uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }
		);
		const DB_NAME = 'RN21TC'// process.env.DB_NAME
		client.connect(async (err) => {
			if (err) {
				reject(err)
				client.close()
			}
			console.log("Connected to database...")
			let rs =await client.db(DB_NAME).collection("user").aggregate(
				[
					{
						"$match":{
							"email": /@sonlh\+5\.com/
						}
					},
					// an
					{
						"$match":{
							"address":"yyy"
						}
					},
					{
						"$project":{
							"password": false
						}
					}
					
				]
			).toArray()
			
			console.log(rs)
			client.close()
		});

	})
}

connectDB()