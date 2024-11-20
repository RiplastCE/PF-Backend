import mongoose from 'mongoose';

const url = "mongodb+srv://<rodrigoezequielboiko>:<>@rodboik.bau00.mongodb.net/";


const connectToDB = () => {
    try {
        mongoose.connect(url)
        console.log('connected to DB e-commerce')
    } catch (error) {
        console.log(error);
    }
};

export default connectToDB

