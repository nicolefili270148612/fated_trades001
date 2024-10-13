// get mongo client to connect with mongodb database

// const { CONNREFUSED } = require('dns');
const {MongoClient} = require('mongodb');


// const client = new MongoClient(uri);

// connect, call and disconnect from the dbcluster

async function main() {
    // copy uri from db and input the updated username and password (not usre credentials)
    const uri = "mongodb+srv://nicolefili:<db_password>@fatedtrades.xgl5b.mongodb.net/?retryWrites=true&w=majority&appName=FatedTrades";      
 
// create an instance of mongo client

    const client = new MongoClient(uri);


    // a try catch has been used incase it throws an error and it will send to console.error
 try {

    // client connect returns a promise
    //use AWAIT key word to block further execution until the operation has completed
    await client.connect();

    // Make the appropriate DB calls

        // DELETE ONE
        // Check if a listing named "Cozy Cottage" exists. Run update.js if you do not have this listing.
        await printIfListingExists(client, "Toyota");
        // Delete the "Cozy Cottage" listing
        await deleteListingByName(client, "Toyota");
        // Check that the listing named "Cozy Cottage" no longer exists
        await printIfListingExists(client, "Toyota");

    

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * Delete an Airbnb listing with the given name.
 * Note: If more than one listing has the same name, only the first listing the database finds will be deleted.
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {string} nameOfListing The name of the listing you want to delete
 */
async function deleteListingByName(client, nameOfListing) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#deleteOne for the deleteOne() docs
    const result = await client.db("niche_data").collection("Ftaed_trades").deleteOne({ name: nameOfListing });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}



/**
 * Print information indicating if a listing with the given name exists. 
 * If a listing has the 'last_scraped' field, print that as well.
 * Note: If more than one listing has the same name, only the first listing the database finds will be printed..
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {String} nameOfListing The name of the listing you want to find
 */
async function printIfListingExists(client, nameOfListing) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    const result = await client.db("niche_data").collection("Fated_trades").findOne({ name: nameOfListing });

    if (result) {
        if (result.last_scraped) {
            console.log(`Found a listing in the collection with the name '${nameOfListing}'. Listing was last scraped ${result.last_scraped}.`);
        } else {
            console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
        }
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}