import { NextFunction, Request, Response } from 'express'
import { ServerError } from '../error/serverError'

const errorHandling = (
	{ statusCode, message, name, stack }: ServerError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res
		.status(statusCode)
		.json({
			name,
			statusCode,
			message,
			stack,
		})
		.end()
}

export { errorHandling }
