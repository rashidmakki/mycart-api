const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.get('*', function(req, res) {
    res.sendFile('Welcome To MyCart!!!');
  });
}
app.post('/checkout', (req, res) => {
   const {token,totalPrice}=req.body;

   return stripe.customers.create({
     source: token.tokenId,
     email:token.email
   } ).then(customer=>{
      const charge=stripe.charges.create({
         amount:totalPrice*100,
         currency:'inr',
         customer:customer.id,
         receipt_email:'arashid854@gmail.com',
         shipping:{
          name:token.card.name,
          address:{
            country:token.card.addressCountry,
            line1:token.card.addressLine1,
            line2:token.card.addressLine2,
            city:token.card.addressCity,
            postal_code:token.card.addressZip
           },
         }
      })
      return charge;
   })
   .then(result=>res.status(200).json({...result}))
   .catch(err=>res.status(500).send(err));
});

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

