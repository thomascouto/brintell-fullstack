import { Options } from '@mikro-orm/core'
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter'
import { TsMorphMetadataProvider } from '@mikro-orm/reflection'
import { Aluno } from './models'
import { bgMagenta, bgCyan } from 'colors'

const options: Options = {
	entities: [Aluno],
	type: 'mongo',
	dbName: process.env.MONGO_DB_NAME,
	metadataProvider: TsMorphMetadataProvider,
	highlighter: new MongoHighlighter(),
	debug: process.env.TS_NODE_DEV ? true : false,
	user: process.env.MONGO_DB_USER,
	password: process.env.MONGO_DB_PASSWORD,
	logger: (message: string) =>
		console.info(bgCyan('MikroORM'), bgMagenta(message)),
}

export default options
