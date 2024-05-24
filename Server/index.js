const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express()
const port = 8080
const bodyParser = require('body-parser')
const cors = require('cors')




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const productShema = new Schema({
    img: { type: String, require:true },
    title: { type: String, require:true },
    price: { type: String, require:true },
  });


  const productModel = mongoose.model('product', productShema);




  app.get('/api/product', async (req, res) => {
      try {
        const product = await productModel.find()
        if (product.length>0) {
            res.status(200).send({message:"succses",data:product})
        } else {
            res.status(204).send({message:'data is empty'})
        }
    } catch (error) {
        res.status(500).send({message:"error"})
    }
})



app.get('/api/product/:id', async (req, res) => {
    const {id}=req.params
    try {
        const product = await productModel.findById(id)
        res.status(200).send({message:"sucsess", data:product})
    } catch (error) {
        res.status(404).send({message:'error'})
    }
})



app.delete('/api/product/:id', async (req, res) => {
    const {id} = req.params
    try {
        const product = await productModel.findByIdAndDelete(id)
        res.status(200).send({message:"sucsess", product:product})
    } catch (error) {
        res.status(500).send({message:'error'})
    }
})



app.post('/api/product', async (req, res) => {
    try {
        const newProduct = new productModel({...req.body})
         await newProduct.save()
        res.status(201).send({message:"succses",data:product})
    } catch (error) {
        res.status(500).send({message:'error'})
    }
})



app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})


mongoose.connect('mongodb+srv://Eli123:eli123@cluster0.ixnlnnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));



