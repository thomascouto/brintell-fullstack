import { Aluno } from '../models'

export interface ListAlunoUseCase {
	list(): Promise<Aluno[]>
}
