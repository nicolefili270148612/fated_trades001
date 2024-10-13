// const { CONNREFUSED } = require('dns');
const {MongoClient} = require('mongodb');


async function main() {
    // copy uri from db and input the updated username and password (not usre credentials)
    const uri = "mongodb+srv://nicolefili:<db_password>@fatedtrades.xgl5b.mongodb.net/?retryWrites=true&w=majority&appName=FatedTrades";

    const client = new MongoClient(uri);



 try {

    await client.connect();

    await findListingByName(client, "Toyota");
     
    await updateListingByName(client, "Toyota Hilux");
    
    await findListingByName(client, "Toyota Hilux");

} finally {
    // Close the connection to the MongoDB cluster
    await client.close();
}
}

main().catch(console.error);

/**
 * Update an listing with the given name
 * Note: If more than one listing has the same name, only the first listing the database finds will be updated.
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the database
 * @param {string} nameOfListing The name of the listing you want to update
 * @param {object} updatedListing An object containing all of the listings to be updated for the given listing
 */
async function updateListingByName(client, nameOfListing, updatedListing) {

    const result = await client.db("niche_data").collection("fated_trades").updateOne({ name: nameOfListing }, { $set: updatedListing });

    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

/**
 * Print a listing with the given name
 * Note: If more than one listing has the same name, only the first listing the database finds will be printed.
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the database
 * @param {String} nameOfListing The name of the listing you want to find
 */

async function findListingByName(client, nameOfListing) {

    const result = await client.db("niche_data").collection("fated_trades").findOne({ name: nameOfListing });

    if (result) {
        console.log(`Found a listing in the db with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}