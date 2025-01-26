const User = require("./models/User");
const jwt = require("jsonwebtoken");
exports.verifyAdmin = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('Received Token:', token);

    if (!token) {
        return res.status(401).json({ message: 'Access denied, token required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded Token:', decoded);
        const user = await User.findById(decoded.id);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user; 
        next(); 
    } catch (err) {
        console.error('Invalid Token Error:', err);
        return res.status(401).json({ message: 'Invalid token' });
    }
};


