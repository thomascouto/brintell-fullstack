import { NextFunction, Request, RequestHandler, Response } from 'express'
import { Controller } from '../interface/controller'

export const routeHandler = (controller: Controller): RequestHandler => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const appResponse = await controller.do(req)
			res.status(appResponse.statusCode).json(appResponse)
		} catch (error) {
			next(error)
		}
	}
}
