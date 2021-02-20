import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// db
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connected successfully');
}).catch((err) => {
    console.log(err);
});

app.post('/signup', (req, res) => {
    
});

app.post('/login', (req, res) => {

});

app.get('/logout', (req, res) => {

});

app.put('/favorites', (req, res) => {

});

app.post('/like', (req, res) => {

});

app.delete('/like', (req, res) => {

});

app.post('/pets', (req, res) => {

});

app.get('/pets', (req, res) => {

});

app.get('/pets/:id', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
});