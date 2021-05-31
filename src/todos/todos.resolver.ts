import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoInput } from './dto/todoInput';
import { TodoType } from './dto/todoType';
import { TodosService } from './todos.service';

@Resolver((of) => TodoType)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}
  @Query((returns) => [TodoType])
  async items(): Promise<TodoType[]> {
    return this.todosService.findAll();
  }

  @Query((returns) => TodoType)
  async item(@Args('id') id: number): Promise<TodoType> {
    return this.todosService.findOne(id);
  }

  @Mutation((returns) => TodoType)
  async create(@Args('todo') todo: TodoInput): Promise<TodoType> {
    return this.todosService.create(todo);
  }

  @Mutation((returns) => TodoType)
  async update(
    @Args('id') id: number,
    @Args('todo') todo: TodoInput,
  ): Promise<TodoType> {
    return await this.todosService.update(id, todo);
  }

  @Mutation((returns) => TodoType)
  async remove(@Args('id') id: number): Promise<TodoType> {
    return await this.todosService.remove(id);
  }
}
