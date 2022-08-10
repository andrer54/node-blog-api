import express from 'express';

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
  const users = {"user": "Andrew Carnegie"}
  res.json(users)
})


const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ Andre na área`),
)