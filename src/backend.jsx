const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const stripe = require("stripe")('sk_test_51M63ypKYn4DrBUBdyzGgWS4dhzYot6w80dBlceUtQBfacZP3kb0emVD2wwWBA8xkk1RRnjl2W3wdJ6XRi1CUJCGE00GwrNtyGY');
const port = process.env.PORT || 9000;

app.use(cors())
app.use(express.json());
// require('dotenv').config()
const uri = "mongodb+srv://nextjs-shop:nextjs-shop@cluster7.qalte53.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
console.log(uri);
async function run() {
    try {

        const tasksCollection = client.db('Redux').collection('tasks')
        const computerCollection = client.db('Redux').collection('computer')
        const userCollection = client.db('Redux').collection('user')
        const jobsCollection = client.db('Redux').collection('jobs')
        app.post("/create-payment-intent", async (req, res) => {
            const price = req.body;
            console.log(price);
            const amount = price.price*100
          
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: "usd",
                "payment_method_types": [
                    "card"
                ]

            });

            res.send({
                clientSecret: paymentIntent.client_secret,
            });
        });


    }
    finally {

    }
}
run().catch(error => console.log(error))

app.get('/', (req, res) => {
    res.send('Hi i am Find Filter Here!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})