const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Boss is running')
})

app.listen(port, () => {
    console.log(`Bistro restaurant is running on port ${port}`)
})