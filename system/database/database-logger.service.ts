/**
 * @fileoverview Database startup logger.
 *
 * @description
 * Logs database connection status once the Nest application has bootstrapped.
 * This is the "Nest-correct" place to log readiness, rather than logging in main.ts.
 *
 * Behavior:
 * - Runs on application bootstrap.
 * - If TypeORM DataSource is initialized, optionally executes a trivial query (SELECT 1).
 *
 * Notes:
 * - Keep logs minimal in production.
 * - For runtime health checks (Kubernetes/readiness), prefer a /health endpoint
 *   (e.g., via @nestjs/terminus) instead of relying only on startup logs.
 */


import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { DataSource } from 'typeorm';




/**
 * Logs and optionally pings the database on app startup.
 */
@Injectable()
export class DatabaseLoggerService implements OnApplicationBootstrap {
    private readonly logger = new Logger(DatabaseLoggerService.name);

    constructor(private readonly dataSource: DataSource) {}

    async onApplicationBootstrap() {
        this.logger.log(`[DB] isInitialized=${this.dataSource.isInitialized}`);

        if (this.dataSource.isInitialized) {
            await this.dataSource.query('SELECT 1');
            this.logger.log('[DB] connected  (ping ok)');
        }
    }
}
