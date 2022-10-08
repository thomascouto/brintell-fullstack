import express, { json, Router, urlencoded } from 'express'
import { errorHandling } from './middlewares/errorMiddleware'
import { MikroORM, RequestContext } from '@mikro-orm/core'
import { EntityManager } from '@mikro-orm/mongodb'
import helmet from 'helmet'
import cors from 'cors'
import http from 'http'
import alunosRouter from './routes/alunos'
import errorRoute from './routes/error'

export const DI = {} as {
	server: http.Server
	orm: MikroORM
	em: EntityManager
}

const initDB = async () => {
	DI.orm = await MikroORM.init()
	DI.em = DI.orm.em as EntityManager
	if (await DI.orm.isConnected()) return true
	return false
}

initDB()
	.then((connected) => {
		if (!connected) throw new Error()

		const { PORT = 3000, TS_NODE_DEV } = process.env
		const app = express()
		const router = Router()
		app.use(json())
		app.use(urlencoded({ extended: true }))
		app.disable('x-powered-by')
		TS_NODE_DEV ? app.use(cors({ origin: '*' })) : app.use(helmet())

		// Rotas + middlewares
		app.use((req, res, next) => RequestContext.create(DI.orm.em, next))
		app.use(alunosRouter(router))
		app.use(errorRoute(router))
		app.use(errorHandling)

		DI.server = app.listen(PORT, () => {
			console.log(`Server listening on localhost @ ${PORT}`)
		})
	})
	.catch((error) => {
		console.error('Error while initalizing database, exiting...', error)
		process.exit(1)
	})
