interface AlunosRequestProps {
	body: AlunosProps[]
}

interface AlunosProps {
	id?: string
	name: string
	email: string
	cpf: string
	sex: 'M' | 'F'
	phone: string
}

interface CountSexRequestProps {
	body: CountSexProps
}
interface CountSexProps {
	male: number
	female: number
}
