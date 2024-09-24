import  express  from "express";

const app = express()
app.use(express.json())

 app.get('/usuarios', (req,res)=>{
     res.send('ok')
  })

app.listen(3000)