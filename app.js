const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const Cors = require('cors')

const ApiRoutes = require('./routes/index')
const connectDB = require('./config/db')
dotenv.config({ path: 'config/config.env' })

const PORT = process.env.PORT || 5000;
const app = express()
connectDB()
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(ApiRoutes)


app.get("/", (req, res) => {
    res.send("Welcome To CityLink")
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Server Not started${err}`);
    }
    console.log(`Server Running in ${process.env.NODE_ENV} on PORT :${PORT}`);
})