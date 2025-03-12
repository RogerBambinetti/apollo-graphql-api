import "reflect-metadata";

import path from 'node:path';
import {ApolloServer} from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { TestResolver } from "./resolvers/test-resolver";

async function init(){
    const schema = await buildSchema({
        resolvers: [
            TestResolver
        ],
        emitSchemaFile: path.resolve('./src/resolvers/schema.gql')
    });

    const server = new ApolloServer({schema});

    const { url } = await server.listen();

    console.log('Started server on', url);
}

init();


