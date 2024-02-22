// controllers/userController.js

const User = require('../models/User');
const bcrypt = require('bcrypt');

// Controller function for user registration
exports.signupUser = async (req, res) => {
    const { username, email, password, repassword } = req.body;
console.log(username);
    // Check if any required field is missing
    if (!username || !email || !password || !repassword) {
        return res.json({ success: false, error: 'Missing fields' });
    }

    // Check if password matches the re-entered password
    if (password !== repassword) {
        return res.json({ success: false, error: 'Passwords do not match' });
    }

    try {
        // Check if a user with the same username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.json({ success: false, error: 'Username or email already taken' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        return res.json({ success: true, user: newUser });
    } catch (error) {
        console.error(error.message);
        return res.json({ success: false, error: 'Error creating user' });
    }
};



// Controller function for user login (authentication)
exports.loginUser = async (req, res) => {
  
  const { password, username } = req.body;
console.log(username);
    if (!username || !password) {
        return res.json({ success: false, error: 'Missing information' });
    }

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.json({ success: false, error: 'Login Attempt Failed' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            return res.json({ success: true, user: { id: user._id, username: user.username } });
        } else {
            return res.json({ success: false, error: 'Login Attempt Failed' });
        }
    } catch (error) {
        console.error(error.message);
        return res.json({ success: false, error: 'Database error' });
    }
};

exports.getUser = async (req, res) => {
    const { username } = req.params.username;

    db
};
// Controller function to update user profile
exports.updateProfile = async (req, res) => {
  // Implement profile update logic here
  const { id, username, email, password } = req.body;

    if (!id || !username || !email || !password) {
        return res.json({ success: false, error: 'Missing fields' });
    }

    try {
        // Find the user by ID
        const user = await User.findById(id);
        if (!user) {
            return res.json({ success: false, error: 'User not found' });
        }

        // Update the user's profile
        user.username = username;
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        await user.save();

        return res.json({ success: true, message: 'Profile updated successfully' });
    } catch (error) {
        console.error(error.message);
        return res.json({ success: false, error: 'Error updating profile' });
    }
};

// Other controller functions for user-related operations can be added as needed
