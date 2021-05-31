import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService, TodosResolver],
})
export class TodosModule {}
