import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Test{
    @Field()
    createdAt: Date

    @Field()
    deletedAt: Date
}