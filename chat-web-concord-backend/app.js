import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'

const app = express()
const uri = 'mongodb://localhost:27017/condorian'
const options = { useNewUrlParser: true, useCreateIndex: true }

// Middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
  console.log('Example app listening on port ' + app.get('port'))
})

mongoose.connect(uri, options).then(
  () => {
    console.log('DB Connected')
  },
  (err) => {
    console.log(err)
  }
)
