const express = require('express')
const app = express()
const cors = require('cors')

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());
require('dotenv').config()


const stripe = require('stripe')(
  'sk_test_51M63ypKYn4DrBUBdyzGgWS4dhzYot6w80dBlceUtQBfacZP3kb0emVD2wwWBA8xkk1RRnjl2W3wdJ6XRi1CUJCGE00GwrNtyGY'
)
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster7.fzzeo8a.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri);
async function run() {
  try {
    const productsCollection = client.db("E-Shop").collection("Products")
    const ordersCollection = client.db("E-Shop").collection("orders")

    app.get('/products', async (req, res) => {
      const query = {};
      const result = await productsCollection.find(query).toArray();
      res.send(result)
    })
    app.post("/create-checkout-session", async (req, res) => {
      const { products } = req.body;
      console.log(products);

      // const lineItems =products

      const lineItems = products.map((product)=>({
        price_data:{
            currency:"bdt",
            product_data:{
                name:product.title,
                images:[product.img]
            },
            unit_amount:product.price * 100,
        },
        quantity:product.quantity
    }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });

      res.json({ id: session.id })

    })
    app.post("/create-payment-intent", async (req, res) => {
      const price = req.body
      console.log(price);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: price,
        currency: "usd",
        statement_descriptor_suffix: "payment useing Stripe",
        automatic_payment_methods: {
          enabled: true
        }
        // "payment_method_types": [
        //   "card"
        // ]

      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });
    app.post('/order', async(req,res)=>{
      const order = req.body;
      console.log(order);
      const result = await ordersCollection.insertOne(order);
      res.send(result)
    })


  }
  finally {

  }
}
run().catch(error => console.log(error))

app.get('/', (req, res) => {
  res.send('Hi Im E-Shop Server Running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})