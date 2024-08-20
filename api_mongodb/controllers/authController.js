import { User } from '../models/User.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register
export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).send({ email,username });
  } catch (error) {
    res.status(500).send({ message: 'Error registering user', error });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body; 
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send({ message: 'Invalid credentials' });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send({ message: 'Invalid credentials' });

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ token, username: user.username }); // Include username in response
  } catch (error) {
    console.error('Login error:', error); // Log error details
    res.status(500).send({ message: 'Error logging in', error });
  }
};
