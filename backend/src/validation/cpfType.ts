import { Type, Platform, ValidationError } from '@mikro-orm/core'

export class CpfType extends Type {
	convertToDatabaseValue(value: string | undefined, platform: Platform): string {
		const regexCpf = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/
		if (!value || !value.match(regexCpf))
			throw ValidationError.invalidType(CpfType, value, 'JS')
		return value
	}
}
