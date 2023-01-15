const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
//middleware
app.use(cors());
app.use(express.json());





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lopokh6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        const postCollection = client.db('tecBlog').collection('post');

        app.get('/post', async(req,res)=>{
            const query = {};
            const post = await postCollection.find(query).toArray();
            res.send(post)
           
        })


    }
    finally{

    }
}
run().catch(err=>console.log(err));






app.get('/', async (req, res) => {
    res.send('Tec-blog Server is running');
})

app.listen(port, () => console.log('Tec-blog Server is running'));