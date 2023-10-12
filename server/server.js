const express = require('express');
const { textToImageGen } = require('./textToImage/textToImage.js')
const cors = require('cors');

const app = express();
const PORT = 3001;

//cors allows connection between client and server.  only want to accept connection from front end
app.use(cors({
    origin: 'http://localhost:3000',
    // origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.get('/', (req, res)=> textToImageGen(req, res))

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`)
})
