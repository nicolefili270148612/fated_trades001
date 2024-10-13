// // get mongo client to connect with mongodb database

// const { CONNREFUSED } = require('dns');
// const {MongoClient} = require('mongodb');


// // const client = new MongoClient(uri);

// // connect, call and disconnect from the dbcluster

// async function main() {
//     // copy uri from db and input the updated username and password (not usre credentials)
//     const uri = "mongodb+srv://nicolefili:<db_password>@fatedtrades.xgl5b.mongodb.net/";      
 
// // create an instance of mongo client

//     const client = new MongoClient(uri);


//     // a try catch has been used incase it throws an error and it will send to console.error
//  try {

//     // client connect returns a promise
//     //use AWAIT key word to block further execution until the operation has completed
//     await client.connect();

//     // Creates 1 listing
//     await createListing(client, {
//         "_id":{"$oid":"66cbc83a23f83d08be018be1"},
//         "category":"cars","description":"white toyota hilux",
//         "year":{"$numberInt":"2014"},
//         "name":"Toyota",
//         "cost":{"$numberLong":"15000"}}
//     )
//     } catch (e) {
//     console.error(e);


//     // creates multiple lisitngs
//     await createMultipleListings(client, [ 
//         {
//             "_id":{"$oid":"66cbc9ea23f83d08be018be2"},
//             "category":"clothing",
//             "description":"Dropped some weight clearing out closet",
//             "size":{"$numberInt":"14"},
//             "Pants":"Jeans",
//             "cost":{"$numberInt":"15"} },
//         {
//             "_id":{"$oid":"66cbca2523f83d08be018be3"},
//             "category":"gaming",
//             "description":"Vintage game",
//             "year":{"$numberInt":"2024"},
//             "ps5 game":"Halo 8",
//             "cost":{"$numberInt":"50"}
//         },
//         {
//             "_id":{"$oid":"66cbcae923f83d08be018be4"},
//             "electronincs":"phone",
//             "description":"Near new",
//             "brand":"Samsung 24",
//             "cost":{"$numberInt":"2000"},
//             "year":{"$numberInt":"2024"}
//         }
    
// ]);




//     // making sure to close the cluster with a finally
// }finally {
//     await client.close();
// }
// }

// // calling the main and sending errors out to the console
// main().catch(console.error);

// // find one document (read)



// // create multiple listings
// async function createMultipleListings(client, newListings){
//     const result = await client.db("niche_data").collection("fated_trades").insertMany(newListings);

//     console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
//     console.log(result.insertedIds);
// }

// // Create 1 listing
// async function createListing(client, newListing) {
//     const result = await client.db("niche_data").collection("fated_trades").insertOne
//     (newListing);
    
//     console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
//     console.log(`New listing created with the following id: $(result.insertId)`);
    
//     }


// // list the databases in our function
// async function listDatabases(client) {
//     // assign to a constant using databaseList
//     // Make sure to call it in the main function above
//     const databasesList = await client.db().admin().listDatabases();

//     console.log(listDatabases);
//     console.log("Databases:");
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     })
// }