import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './system/database/database.module';

import { ConfigModule, ConfigService } from '@nestjs/config';




@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), // so ConfigService works everywhere without re-importing
    DatabaseModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
