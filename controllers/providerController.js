const express = require('express');
const router = express.Router();
const Provider = require('../models/providerModel');

// POST a new provider
const createProvider = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            practiceName,
            email,
            phone,
            speciality,
            iAmA,
            productInterest,
            providers
        } = req.body;

        const provider = new Provider({
            firstName,
            lastName,
            practiceName,
            email,
            phone,
            speciality,
            iAmA,
            productInterest,
            providers
        });

        await provider.save();
        res.status(201).json(provider);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message : "failed to create" });
    }
};

// GET all providers
const getAllProviders = async (req, res) => {
    try {
        const providers = await Provider.find({ deleted: false });

        res.json(providers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message : "failed to get" });
    }
};

module.exports ={
    createProvider,
    getAllProviders
};
