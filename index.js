const express = require('express');

const app = express();

// Routing
app.get('/', (req , res)=>{
    res.json({
        message: 'Hello World'
    });
})
app.get('/ecommerce', (req , res)=>{
    res.json({
        message: 'ecommerce'
    });
})

app.listen(4000, ()=>{
    console.log('Server is running on port http://localhost:4000/');
});