const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Profile
const User = require('../../models/User');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public

router.get('/test', (req, res) => res.json({ msg: "Profile Works" }));

// @route   GET api/profile
// @desc    Tests profile route
// @access  Public

module.exports = router;