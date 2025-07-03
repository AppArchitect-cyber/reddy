// routes/whatsapp.js
const express = require('express');
const router = express.Router();
const WhatsApp = require('../models/WhatsApp');

// GET /whatsapp → returns current number
router.get('/', async (req, res) => {
  try {
    const data = await WhatsApp.findOne({});
    if (!data) return res.status(404).json({ number: '' });
    res.json({ number: data.number });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST /whatsapp (Admin panel)
router.post('/', async (req, res) => {
  const { number, password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD)
    return res.status(403).json({ error: "Unauthorized" });

  try {
    const existing = await WhatsApp.findOne({});
    if (existing) {
      existing.number = number;
      await existing.save();
    } else {
      await WhatsApp.create({ number });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});

module.exports = router;
