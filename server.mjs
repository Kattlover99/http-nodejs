import { createServer } from 'http';

import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';

app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req, res) => {
    res.write('Hello World!');
  })

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