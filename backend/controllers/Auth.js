
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken")

exports.signup = async (req, res) => {
    const { email, password } = req.body; // Destructure id (email) and password from the request body

    // Validation: Ensure that both id and password are provided
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Please provide both id (email) and password',
        });
    }

    try {
        // Check if the user with the provided id already exists
        const existingUser = await User.findOne({ email:email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User with this id already exists',
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with the id and hashed password
        const newUser = new User({
            email,           // Email or username as id
            password: hashedPassword, // Store the hashed password
        });

        // Save the user to the database
        await newUser.save();

        // Respond with success message
        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
        });
    } catch (error) {
        // Handle any errors that may occur during the process
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while registering the user',
            error: error.message,
        });
    }
}

exports.login = async (req,res) =>{
    try{
        const {email, password } = req.body; 
        console.log(req.body);

        if (!email || !password ){
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the Required Fields`,
            })
        }
        
        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                success: false,
                message: `User is not Registered`,
            })
        }

        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign(
                { email: user.email, id: user._id},process.env.JWT_SECRET,
                {
                expiresIn: "24h",
                }
            )
            user.token = token
            user.password = undefined

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: `User Login Success`,
            })
        }
        else{
            return res.status(401).json({
                success: false,
                message: `Password is incorrect`,
            })
        }

    } catch(error){
        return res.status(500).json({
            success: false,
            error:error.message,
            message: `Login Failure Please Try Again`,
        })
    }
}