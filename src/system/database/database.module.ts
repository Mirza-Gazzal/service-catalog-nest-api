/**
 * @fileoverview Database module (infrastructure layer).
 *
 * @description
 * Centralizes database configuration and bootstrap behaviors for the application.
 * This keeps AppModule clean and avoids scattering connection logic across modules.
 *
 * Responsibilities:
 * - Register TypeORM connection via `forRootAsync`.
 * - Provide the options factory that builds TypeORM config from environment.
 * - Optionally run lightweight startup checks/logging (e.g., a `SELECT 1` ping).
 *
 * Notes:
 * - `synchronize` must remain `false` for production safety.
 * - Entities are auto-loaded from feature modules when `autoLoadEntities` is enabled.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmOptionsService } from './typeorm-options.service';
import { DatabaseLoggerService } from './database-logger.service';

@Module({
    imports: [
        ConfigModule, //  ensures ConfigService is available in this module context
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],       //  makes ConfigService available to the options factory
            useClass: TypeOrmOptionsService,
        }),
    ],
    providers: [
        TypeOrmOptionsService, //  REQUIRED when using useClass
        DatabaseLoggerService,
    ],
})
export class DatabaseModule {}
