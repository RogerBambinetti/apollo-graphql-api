import "reflect-metadata";

import {ApolloServer} from 'apollo-server';
import { buildSchema } from 'type-graphql';


async function bootstrap(){
    
}

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            helloWorld: () =>{
                return "hello world";
            }
        }
    }
});

