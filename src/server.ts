import express from 'express'

const app = express()

app.get('/test', (request, response) => {
  return response.send({
    message: 'Hello World, método GET'
  })
})

app.post('/test-post', (req, resp) => {
  return resp.send({
    message: 'Hello World, método POST'
  })
})

app.listen(3000, () => console.log('Serve is running'))

