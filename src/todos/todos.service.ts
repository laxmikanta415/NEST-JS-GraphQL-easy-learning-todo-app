import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { TodoInput } from './dto/todoInput';
import { TodoType } from './dto/todoType';
@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<TodoType[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: number): Promise<TodoType> {
    return await this.todoRepository.findOne(id);
  }

  async create(createTodoDto: TodoInput): Promise<TodoType> {
    const createdTodo = await this.todoRepository.create(createTodoDto);
    return await this.todoRepository.save(createdTodo);
  }

  async remove(id: number): Promise<TodoType> {
    const deletedTodo = await this.todoRepository.findOne(id);
    await this.todoRepository.delete(id);
    return deletedTodo;
  }
  async update(id: number, todo: TodoInput): Promise<TodoType> {
    await this.todoRepository.update(id, todo);
    return await this.todoRepository.findOne(id);
  }
}
