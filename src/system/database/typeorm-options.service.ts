
/**
 * @fileoverview TypeORM options factory for NestJS.
 *
 * @description
 * Provides a single source of truth for TypeORM configuration.
 * Implemented as a Nest provider so it can use DI (ConfigService).
 *
 * Why this exists:
 * - Keeps DB config out of AppModule.
 * - Makes it easy to adjust logging, SSL, timeouts, pooling, etc.
 * - Improves testability (override this provider in tests).
 *
 * Expected env vars:
 * - DATABASE_URL: PostgreSQL connection string (e.g. postgresql://user:pass@host:5432/db)
 */

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';


/**
 * Builds TypeORM configuration using environment variables.
 *
 * @implements {TypeOrmOptionsFactory}
 */
@Injectable()
export class TypeOrmOptionsService implements TypeOrmOptionsFactory {
    constructor(private readonly config: ConfigService) {}




    /**
     * Creates the TypeORM module options.
     *
     * @returns {TypeOrmModuleOptions} Connection options for TypeORM.
     * @throws If DATABASE_URL is missing (via ConfigService.getOrThrow).
     * @remarks
     * - `synchronize: false` prevents TypeORM from mutating schema at runtime (migrations-first).
     * - `autoLoadEntities: true` allows feature modules to register entities via `forFeature()`.
     * - `trim()` is used to avoid hidden whitespace issues in .env files (common on Windows).
     */
    createTypeOrmOptions(): TypeOrmModuleOptions {
        const url = this.config.getOrThrow<string>('DATABASE_URL').trim();

        return {
            type: 'postgres',
            url,
            autoLoadEntities: true,
            synchronize: false,        //  migrations-first
            logging: ['error'],
            // retries are handled by Nest TypeOrmModule automatically
        };
    }
}
