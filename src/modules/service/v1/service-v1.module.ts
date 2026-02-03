import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from '../entities/service.entity';
import { ServicesRepository } from './services.repository';
import { ServicesService } from './service-v1.service';
import {ServicesController} from  './service-v1.controller'

@Module({
    imports: [TypeOrmModule.forFeature([ServiceEntity])],
    providers: [ServicesRepository, ServicesService],
    controllers: [ServicesController],
})
export class ServicesModule {}
