const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path')


const Datastore = require('nedb-promises');

var CaporauxDB = new Datastore({filename: 'CaporauxDB.nedb', autoload: true});

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('ras')
})
/*Mes articles*/ 
app.get('/articles', async (req, res, next) => {
    try{
        let articles = await CaporauxDB.find();
        res.json(articles);
    }catch(e){
        next(e)
    }
})
app.post('/articles', async (req, res, next) => {
    try{
        let articles = await CaporauxDB.insert(req.body, function (err, newdocs){
            if (err) console.log(err);
        })
        res.json(articles);
    }catch(e){
        next(e)
    }
})
app.delete('/articles/:id',(req, res) =>{
    CaporauxDB.remove({_id:req.params.id},{}, function(err, docs){
    });
    res.json("Articles supprimer");
})

//gestion erreur synchrone
app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).json(err.stack);
})
const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(` listening on ${port}`);
});