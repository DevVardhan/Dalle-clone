import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true); // for search bar 
    mongoose.connect(url)
        .then(() => console.log('connected to mongo'))
        .catch((err) => {
            console.error('failed to connect with mongo');
            console.error(err);
        });
};

export default connectDB;