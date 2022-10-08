import axios from 'axios'

const host = 'localhost'
const port = 3000
const baseURL = `http://${host}:${port}/`

const getList = async (): Promise<AlunosProps[]> => {
	const { data, status } = await axios.get<AlunosRequestProps>('list', {
		baseURL,
	})
	if (status === 200 && data.body.length >= 0) return data.body
	throw new Error('Erro no servidor ao carregar alunos.')
}

const addUser = async ({
	cpf,
	email,
	phone,
	sex,
	name,
}: AlunosProps): Promise<number> => {
	const { status } = await axios.post(
		'add',
		{ cpf, email, phone, sex, name },
		{ baseURL }
	)

	if (status === 201) return 201
	throw new Error('Erro no servidor ao inserir novo usuário.')
}

const getChartData = async (): Promise<CountSexProps> => {
	const { status, data } = await axios.get<CountSexRequestProps>('count', {
		baseURL,
	})
	if (status === 200) return data.body
	throw new Error('Erro no servidor ao carregador informações.')
}

export const http = { getList, getChartData, addUser }
