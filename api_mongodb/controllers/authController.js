import { User } from '../models/User.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



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


// Register
export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ exists: true, message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    

    // Generate token for the new user
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, username: newUser.username });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};



