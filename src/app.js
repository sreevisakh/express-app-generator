import express from 'express';
import Router from './router';



let PORT = process.env.PORT || 8081

let app = express();
let router = Router(app);

app.listen(PORT, function() {
    console.log('Server listening on ', PORT)
});