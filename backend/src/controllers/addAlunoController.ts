import { ValidationError } from '@mikro-orm/core'
import { Request } from 'express'
import { ServerError } from '../error/serverError'
import { AddAlunoUseCase } from '../interface/add'
import { Controller } from '../interface/controller'
import { Aluno } from '../models'
import { http } from '../util/httpResponse'

export class AddAlunoController implements Controller {
	async do(req: Request): Promise<HttpResponse> {
		try {
			const aluno = new Aluno(req.body)
			await this.addAlunoUseCase.add(aluno)
			return http.created()
		} catch (error) {
			if (error instanceof ValidationError)
				throw new ServerError(http.validationError(error.message))
			throw new ServerError(http.serverError())
		}
	}

	constructor(private readonly addAlunoUseCase: AddAlunoUseCase) {}
}
