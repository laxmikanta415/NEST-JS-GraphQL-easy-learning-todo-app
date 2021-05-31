import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodosModule } from './todos/todos.module';
import { join } from 'path';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'devuser',
      password: 'devuser',
      database: 'todo-graph',
      synchronize: true,
      entities: [Todo],
      migrationsTableName: 'todo_migrations',
      migrations: ['migration/*.js'],
      cli: {
        migrationsDir: 'migration',
      },
    }),
    TodosModule,
    GraphQLModule.forRoot({
      include: [TodosModule],
      autoSchemaFile: join(process.cwd(), 'src/schema/gqlSchema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
