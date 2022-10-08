import { Request } from 'express'

export interface Controller {
	do(req: Request): Promise<HttpResponse>
}
