import { Request } from 'express'
import { ServerError } from '../error/serverError'
import { ListAlunoUseCase } from '../interface/list'
import { Controller } from '../interface/controller'
import { http } from '../util/httpResponse'

export class ListAlunosController implements Controller {
	async do(req: Request): Promise<HttpResponse> {
		try {
			const result = await this.listAlunoUseCase.list()
			return http.ok(result)
		} catch (error) {
			throw new ServerError(http.serverError())
		}
	}

	constructor(private readonly listAlunoUseCase: ListAlunoUseCase) {}
}
