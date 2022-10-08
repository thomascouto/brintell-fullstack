export class ServerError extends Error {
	public statusCode: number

	constructor({ statusCode, body = 'Internal Server error' }: HttpResponse) {
		super(body as string)
		this.statusCode = statusCode
	}
}
