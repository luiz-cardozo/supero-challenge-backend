import { Router } from 'express'
import BookController from './app/controllers/BookController'

const routes = new Router()

routes.post('/books', BookController.store)
routes.get('/books', BookController.index)

export default routes
