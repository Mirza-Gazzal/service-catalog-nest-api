import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../system/database/database.module';

import { ConfigModule, ConfigService } from '@nestjs/config';




@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), // so ConfigService works everywhere without re-importing
    DatabaseModule,
    /*TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const raw = config.getOrThrow<string>('DATABASE_URL');
        const url = raw.trim(); // ✅ remove hidden spaces / \r

        console.log(
            'TYPEORM URL =',
            url.replace(/:(.*?)@/, ':****@'), // hide password
        );

        return {
          type: 'postgres' as const,
          url,
          autoLoadEntities: true,
          synchronize: false,
          logging: ['error'],
        };
      },
    }),
*/
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
