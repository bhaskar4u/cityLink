const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const Cors = require('cors')

dotenv.config({ path: 'config/config.env' })

const PORT = process.env.PORT || 5000;
const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("Welcome To CityLink")
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Server Not started${err}`);
    }
    console.log(`Server Running in ${process.env.NODE_ENV} on PORT :${PORT}`);
})