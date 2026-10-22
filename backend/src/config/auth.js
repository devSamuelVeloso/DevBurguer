import dotenv from 'dotenv';
dotenv.config();

const authConfig = {
    expiresIn: '7d',
    secret: process.env.JWT_SECRET
}

export default authConfig