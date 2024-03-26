//?IMPORT EXPRESS TO HELP MAKE OUR WEB API SERVER
const express = require('express');
//?The variable we'll call in order to use an EXPRESS method/function.
const app = express();
//* The localhost port we'll use.
const port = 4001;
//* IMPORT OUR router.js CODE
const router = require('./app/routes/router')

app.use(express.json());
app.use(express.urlencoded({ extended: true,}));


// app.get('/europe', (req, res) => {
//     res.send('WHy ya bloody here.')
// })



//? Anytime the server runs this will run if nothing goes wrong
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})


//* OUR NEW DIRECTORY FOR GET/POST REQUEST
app.use('/api', router);