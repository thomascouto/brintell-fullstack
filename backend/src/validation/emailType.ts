import { Type, Platform, ValidationError } from '@mikro-orm/core'

export class EmailType extends Type {
	convertToDatabaseValue(value: string | undefined, platform: Platform): string {
		const regexEmail = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
		if (!value || !value.match(regexEmail))
			throw ValidationError.invalidType(EmailType, value, 'JS')
		return value
	}
}
