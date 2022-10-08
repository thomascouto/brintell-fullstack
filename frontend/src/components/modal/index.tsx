import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import styles from '../../scss/modal.module.scss'
import { http } from '../../api/request'

const schema = Yup.object().shape({
	name: Yup.string().trim().required('Campo obrigatório'),
	email: Yup.string()
		.trim()
		.email('Email inválido')
		.required('Campo obrigatório'),
	phone: Yup.string()
		.trim()
		.matches(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/)
		.required('Campo obrigatório'),
	cpf: Yup.string()
		.trim()
		.matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/)
		.required('Campo obrigatório'),
})

const ModalWindow = ({ show, handleModal }: ModalProps) => {
	return (
		<Modal show={show} onHide={handleModal}>
			<Modal.Header closeButton>
				<Modal.Title>Novo aluno</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Formik
					validationSchema={schema}
					onSubmit={async (values: AlunosProps) => {
						try {
							const res = await http.addUser(values)
							if (res === 201) handleModal()
						} catch (error) {
							console.log(error)
						}
					}}
					initialValues={{
						name: '',
						email: '',
						phone: '',
						cpf: '',
						sex: 'M',
					}}
				>
					{({ handleSubmit, handleChange, values, errors }) => (
						<Form noValidate onSubmit={handleSubmit}>
							<Form.Group>
								<Form.Label>Nome</Form.Label>
								<InputGroup hasValidation>
									<Form.Control
										type="text"
										placeholder="Nome"
										aria-describedby="inputGroupPrepend"
										name="name"
										value={values.name}
										onChange={handleChange}
										isInvalid={!!errors.name}
										autoFocus
									/>
									<Form.Control.Feedback type="invalid">
										{errors.name}
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
							<Form.Group>
								<Form.Label>CPF</Form.Label>
								<InputGroup hasValidation>
									<Form.Control
										type="text"
										placeholder="CPF"
										aria-describedby="inputGroupPrepend"
										name="cpf"
										value={values.cpf}
										onChange={handleChange}
										isInvalid={!!errors.cpf}
									/>
									<Form.Control.Feedback type="invalid">
										{'Formato inválido 123.456.789-00'}
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
							<Form.Group>
								<Form.Label>Telefone</Form.Label>
								<InputGroup hasValidation>
									<Form.Control
										type="text"
										placeholder="Telefone (00) 00000-0000"
										aria-describedby="inputGroupPrepend"
										name="phone"
										value={values.phone}
										onChange={handleChange}
										isInvalid={!!errors.phone}
									/>
									<Form.Control.Feedback type="invalid">
										{'Formato inválido (11) 11111-1111'}
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
							<Form.Group>
								<Form.Label>E-mail</Form.Label>
								<InputGroup hasValidation>
									<Form.Control
										type="text"
										placeholder="Email"
										aria-describedby="inputGroupPrepend"
										name="email"
										value={values.email}
										onChange={handleChange}
										isInvalid={!!errors.email}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.email}
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
							<Form.Group>
								<Form.Label>Sexo:</Form.Label>
								<label>
									<Field type="radio" name="sex" value="M" />
									Masculino
								</label>
								<label>
									<Field type="radio" name="sex" value="F" />
									Feminino
								</label>
							</Form.Group>
							<div className={styles.buttons}>
								<Button type={'submit'} variant="primary">
									Adicionar
								</Button>
							</div>
						</Form>
					)}
				</Formik>
			</Modal.Body>
		</Modal>
	)
}

export default ModalWindow
