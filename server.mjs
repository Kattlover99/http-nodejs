import { createServer } from 'http';

const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')

app.use(bodyParser.json())
app.use(cors())

app.post('/', async (req, res) => {
  res.write('Hello World!');
    if (req.body.method === 'POST') {
        // console.log(req.body.data);
        const data = await axios.post('https://powerlineapplications.com/api/v1/query', req.body.data, {
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                'Access-Control-Allow-Origin': '*',
                'appToken': '7b14ecc3-27c9-4373-bcfe-ec2c86b93296',
            }
        })
        res.send(JSON.stringify(data.data));
    }
})


app.listen(process.env.PORT)
