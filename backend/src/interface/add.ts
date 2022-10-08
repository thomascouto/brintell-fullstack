import { Aluno } from '../models'

export interface AddAlunoUseCase {
	add(aluno: Aluno): Promise<void>
}
