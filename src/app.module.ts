import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonController } from './modules/person/person.controller';
import { Person } from './modules/person/person.entity';
import { PersonModule } from './modules/person/person.module';
import { PersonService } from './modules/person/person.service';

@Module({
  imports: [PersonModule,TypeOrmModule.forRoot({
    autoLoadEntities:true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
