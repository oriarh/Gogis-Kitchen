const express = require('express');
const router = express.Router();
require('dotenv').config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Send publishable key to the frontend
router.get("/config", (req, res) => {
  // console.log("This is backeng strip config api: ");
    res.status(200).json({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
});

// Create payment intent
router.post("/create-payment-intent", async (req, res) => {
    const { finalAmount } = req.body;
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "usd",
        amount: finalAmount,
        automatic_payment_methods: { enabled: true },
      });
  
      // Send publishable key and PaymentIntent details to client
      res.status(200).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        error: {
          message: e.message,
        },
      });
    }
});

module.exports = router;