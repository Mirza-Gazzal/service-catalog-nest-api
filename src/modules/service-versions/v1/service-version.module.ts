/*
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceVersionEntity } from '../entities/service-version.entity';
import { ServiceVersionsController } from '../v1/service-version-v1.controller';
import { ServiceVersionsService } from '../v1/service-version-v1.service';
import { ServiceVersionsRepo } from '../v1/service-version-v1.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceVersionEntity])],
    controllers: [ServiceVersionsController],
    providers: [ServiceVersionsService, ServiceVersionsRepo],
    exports: [TypeOrmModule, ServiceVersionsRepo, ServiceVersionsService],
})
export class ServiceVersionsModule {}*/
