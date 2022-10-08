import React from 'react'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import style from '../../scss/table.module.scss'
import { http } from '../../api/request'

const ResultsTable = () => {
	const [data, setData] = React.useState<AlunosProps[]>([])
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		const doFetch = async () => {
			const res = await http.getList()
			if (res.length > 0) setData(res)
		}

		try {
			doFetch()
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}, [])

	return (
		<>
			{isLoading ? (
				<Spinner animation="grow" />
			) : (
				<div className={style.tableContainer}>
					<Table hover responsive="sm">
						<thead>
							<tr>
								<th>#</th>
								<th>Nome</th>
								<th>CPF</th>
								<th>Sexo</th>
								<th>E-mail</th>
								<th>Telefone</th>
							</tr>
						</thead>
						<tbody>
							{data.length > 0 ? (
								data.map((al, i) => (
									<tr key={i}>
										<td>{al.id}</td>
										<td>{al.name}</td>
										<td>{al.cpf}</td>
										<td>{al.sex === 'M' ? 'Masculino' : 'Feminino'}</td>
										<td>{al.email}</td>
										<td>{al.phone}</td>
									</tr>
								))
							) : (
								<tr>
									<td>Nenhum aluno encontrado.</td>
								</tr>
							)}
						</tbody>
					</Table>
				</div>
			)}
		</>
	)
}

export default ResultsTable
