import { AddAlunoController } from '../controllers/addAlunoController'
import { CountSexController } from '../controllers/countSexController'
import { ListAlunosController } from '../controllers/listAlunosController'
import { AlunosRepository } from '../db/alunosRepository'
import { Controller } from '../interface/controller'

const listFactory = (): Controller => {
	const useCase = new AlunosRepository()
	const controller = new ListAlunosController(useCase)
	return controller
}

const addFactory = (): Controller => {
	const useCase = new AlunosRepository()
	const controller = new AddAlunoController(useCase)
	return controller
}

const countSexFactory = (): Controller => {
	const useCase = new AlunosRepository()
	const controller = new CountSexController(useCase)
	return controller
}

export const aluno = { listFactory, addFactory, countSexFactory }
