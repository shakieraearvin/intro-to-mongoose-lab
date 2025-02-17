const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Customer = require('./models/customer.js');

const prompt = require('prompt-sync')();


const welcome = prompt('Welcome to the CRM\n\nWhat would you like to do?\n\n1. Create a customer\n2. View all customers\n3. Update a customer\n4. Delete a customer\n5. quit');

  //console.log(welcome);

  //const welcome = prompt('What's your name?');\
   
    console.log(`Your name is ${username}`);

    const connect = async () => {
        // Connect to MongoDB using the MONGODB_URI specified in our .env file.
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
      
        // Call the runQueries function, which will eventually hold functions to work
        // with data in our db.
        await runQueries()
      
        // Disconnect our app from MongoDB after our queries run.
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
      
        // Close our app, bringing us back to the command line.
        process.exit();
      };

      const runQueries = async () => {
        console.log('Queries running.')
        // The functions calls to run queries in our db will go here as we write them.
        //await createCustomer();
        await findCustomers();
      };

const createCustomer = async () => {

    const customerData = {
     name: 'Shakiera', age: 35,
     name: justin, age: 25,
    };
  
    const customer = await Customer.create(customerData);
    console.log('new customer', customer);

};

const findCustomers = async () => {
    const customers = await Customer.find({});
    console.log('All customers:', customers);
};

connect();