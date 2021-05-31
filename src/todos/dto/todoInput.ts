import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TodoInput {
  @Field()
  readonly title: string;
}
