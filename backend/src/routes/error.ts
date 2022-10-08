import { NextFunction, Request, Response, Router } from 'express'
import { ServerError } from '../error/serverError'

export default (router: Router): Router => {
	router.use((req: Request, res: Response, next: NextFunction) => {
		next(
			new ServerError({
				statusCode: 404,
				body: `Resource not found. (${req.url})`,
			})
		)
	})
	return router
}
