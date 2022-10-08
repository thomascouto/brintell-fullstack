import { Entity, Property } from '@mikro-orm/core'
import { AlunosRepository } from '../db/alunosRepository'
import { CpfType } from '../validation/cpfType'
import { EmailType } from '../validation/emailType'
import { PhoneType } from '../validation/phoneType'
import { BaseEntity } from './baseEntity'

@Entity({ customRepository: () => AlunosRepository })
export class Aluno extends BaseEntity {
	@Property({ length: 3 })
	name!: string

	@Property({ type: CpfType })
	cpf!: string

	@Property({ type: EmailType })
	email!: string

	@Property({ type: PhoneType })
	phone!: string

	@Property({ length: 1 })
	sex!: 'M' | 'F'

	constructor({ name, cpf, email, phone, sex }: AlunosProps) {
		super()
		this.name = name
		this.cpf = cpf
		this.email = email
		this.phone = phone
		this.sex = sex
	}
}
