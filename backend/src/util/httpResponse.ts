const response = (statusCode: number, body?: unknown): HttpResponse => ({
	statusCode,
	body,
})

const ok = (body?: unknown): HttpResponse => response(200, body)
const created = (body?: unknown): HttpResponse => response(201, body)
const noContent = (): HttpResponse => response(204)
const forbidden = (body?: unknown): HttpResponse => response(401, body)
const serverError = (body?: unknown): HttpResponse => response(500, body)
const validationError = (body?: unknown): HttpResponse => response(400, body)

export const http = {
	ok,
	created,
	noContent,
	forbidden,
	serverError,
	validationError,
}
