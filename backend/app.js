const express = require('express')
const app = express()
const port = 3030;
const client = require('./db/conn');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null,`${Date.now()}.${file.originalname}` )
    }
  })
  
  const upload = multer({ storage: storage })

app.get('/', (req, res) => {
  res.json({ "message": 'Hello World! 123'})
})

app.get('/blog', async (req, res) => {
    const result = await client.query('SELECT * from blogs');
    res.json({"data":result.rows[0]})
});


app.post('/blog', async (req, res) => {
    const result = await client.query ('INSERT INTO blogs (title, image, post) VALUES ($1, $2, $3)', [
        req.body.title, req.body.image, req.body.post
    ]);
    res.json({"message": "Added new blog","desc":result.rowCount});
})

app.post('/blogimage', upload.single('file'), function (req, res, next) {
    res.json(req.file);
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})