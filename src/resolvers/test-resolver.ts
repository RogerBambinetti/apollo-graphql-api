import {Resolver, Query, Mutation, Arg} from "type-graphql";
import { CreateTestInput } from "../dtos/inputs/create-test-input";

@Resolver()
export class TestResolver {

    @Query(() => String)
    async helloWorld() {
        
    }

    @Mutation(() => Boolean)
    async createTest(@Arg('data') data: CreateTestInput){

        return true;
    }
}