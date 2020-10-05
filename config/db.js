const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MongoURI}`, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`MongoDB connected:${conn.connection.host}`);
    }
    catch (err) {
        console.log(`MongoDB not Connected:${err}`);
        process.exit(1)
    }
}

module.exports = connectDB;