import { EntityRepository } from '@mikro-orm/mongodb'
import { ListAlunoUseCase } from '../interface/list'
import { AddAlunoUseCase } from '../interface/add'
import { CountSexUseCase } from '../interface/countSex'
import { Aluno } from '../models'
import { DI } from '..'

export class AlunosRepository
	extends EntityRepository<Aluno>
	implements ListAlunoUseCase, AddAlunoUseCase, CountSexUseCase
{
	async list(): Promise<Aluno[]> {
		return await this.findAll()
	}

	async add(aluno: Aluno): Promise<void> {
		await this.persistAndFlush(aluno)
	}

	async countSex(): Promise<CountSexProps> {
		const male = await this.count({ sex: 'M' })
		const female = await this.count({ sex: 'F' })
		return {
			male,
			female,
		}
	}

	constructor() {
		super(DI.em, Aluno)
	}
}
