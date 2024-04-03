const express = require('express');
const { Router } = require('express');
const router = require('.');
const app = express();

router.get('./user', (req,res) => {
    res.json({
        message: "this is not workign"
    })
})
