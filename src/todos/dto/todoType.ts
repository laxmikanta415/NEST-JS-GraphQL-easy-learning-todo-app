import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodoType {
  @Field(() => ID)
  readonly id?: number;
  @Field()
  readonly title: string;
}
