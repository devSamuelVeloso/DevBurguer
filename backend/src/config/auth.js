import dotenv from 'dotenv';
dotenv.config();

const auth = {
    expiresIn: '7d',
    secret: process.env.JWT_SECRET
}

export default auth