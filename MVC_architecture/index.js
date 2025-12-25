import express from 'express';
import router from './routes/studentRoute.js';  

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(7007, () => {
    console.log("success 7007");
});