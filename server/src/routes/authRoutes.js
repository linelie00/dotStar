const express = require('express');
const { signUp } = require('../models/signUpModel');

const router = express.Router();

router.post('/signUp', async (req, res) => {
    try {
        const formData = req.body;

        const result = await signUp(formData);

        res.status(201).json(result);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                success: false,
                message: error.message || 'API 호출 중 오류 발생',
            });
        } else {
            console.log('Unknown error', error);
        }
    }
});

module.exports = router;
