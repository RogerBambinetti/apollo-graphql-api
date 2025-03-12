import {Field, InputType} from 'type-graphql';

@InputType()
export class CreateTestInput {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    deletedAt: Date;
}