import { Request } from 'express'
import { ServerError } from '../error/serverError'
import { Controller } from '../interface/controller'
import { CountSexUseCase } from '../interface/countSex'
import { http } from '../util/httpResponse'

export class CountSexController implements Controller {
	async do(req: Request): Promise<HttpResponse> {
		try {
			const response = await this.countSexUseCase.countSex()
			return http.ok(response)
		} catch (error) {
			throw new ServerError(http.serverError())
		}
	}

	constructor(private readonly countSexUseCase: CountSexUseCase) {}
}
