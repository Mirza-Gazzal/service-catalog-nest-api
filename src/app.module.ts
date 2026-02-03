import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './system/database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { ServicesModule } from './modules/service/v1/service-v1.module';





@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), // so ConfigService works everywhere without re-importing
    DatabaseModule,
    ServicesModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
