//Bibliótecas
import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { Err } from './err'

//Rotas
import { router } from './routes'

// Conexão como banco
import './database'

const app = express()

app.use(express.json())

app.use(router)

app.use((err: Err, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Err) {
    return response.status(err.code).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server Error'
  })
})

app.listen(3000, () => console.log('Serve is running'))