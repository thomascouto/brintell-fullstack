import { Type, Platform, ValidationError } from '@mikro-orm/core'

export class PhoneType extends Type {
	convertToDatabaseValue(value: string | undefined, platform: Platform): string {
		const regexPhone = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/
		if (!value || !value.match(regexPhone))
			throw ValidationError.invalidType(PhoneType, value, 'JS')
		return value
	}
}
