// const { CONNREFUSED } = require('dns');
// const {MongoClient} = require('mongodb');


// // const client = new MongoClient(uri);

// // connect, call and disconnect from the dbcluster

// async function main() {
//     // copy uri from db and input the updated username and password (not usre credentials)
//     const uri = "mongodb+srv://nicolefili:<db_password>@fatedtrades.xgl5b.mongodb.net/?retryWrites=true&w=majority&appName=FatedTrades";
 
// // create an instance of mongo client

//     const client = new MongoClient(uri);


//     // a try catch has been used incase it throws an error and it will send to console.error
//  try {

//     // client connect returns a promise
//     //use AWAIT key word to block further execution until the operation has completed
//     await client.connect();

//     await findOneListingByCategory(client, "cars");

//     await findOneListingBySize(client, {Size: 14
//     });

//     await findOneListingByYear(client, {
//         Year:2014,
//     });


//     // making sure to close the cluster with a finally
// }finally {
//     await client.close();
// }
// }

// main().catch(console.error);

// // find one document (read)
// async function findOneListingByCategory(client, categoryOfListing) {
//     const result = await client.db("niche_data").collection("fated_trades").findOne({ name: categoryOfListing });

//     if (result) {
//         console.log(`Found a listing in the collection with the name '${categoryOfListing}':`);
//         console.log(result);
//     } else {
//         console.log(`No listings found with the name '${categoryOfListing}'`);
//     }
// }

// async function findOneListingBySize(client, sizeOfListing) {
//     const result = await client.db("niche_data").collection("fated_trades").findOne({ size: sizeOfListing });

//     if (result) {
//         console.log(`Found a listing in the collection with the name '${sizeOfListing}':`);
//         console.log(result);
//     } else {
//         console.log(`No listings found with the name '${sizeOfListing}'`);
//     }
// }

// async function findOneListingByYear(client, yearOfListing) {
//     const result = await client.db("niche_data").collection("fated_trades").findOne({ size: sizeOfListing });

//     if (result) {
//         console.log(`Found a listing in the collection with the name '${yearOfListing}':`);
//         console.log(result);
//     } else {
//         console.log(`No listings found with the name '${yearOfListing}'`);
//     }
// }


// // list the databases in our function
// async function listDatabases(client) {
//     // assign to a constant using databaseList
//     // Make sure to call it in the main function above
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     })
// }