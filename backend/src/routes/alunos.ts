import { Router } from 'express'
import { aluno } from '../factories/aluno'
import { routeHandler } from '../util/routeHandler'

export default (route: Router): Router => {
	route.get('/list', routeHandler(aluno.listFactory()))
	route.post('/add', routeHandler(aluno.addFactory()))
	route.get('/count', routeHandler(aluno.countSexFactory()))

	return route
}
