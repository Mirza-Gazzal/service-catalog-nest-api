import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from '../entities/service.entity';
import { ServicesRepository } from './services.repository';
import { ServicesService } from './service-v1.service';
import {ServicesController} from  './service-v1.controller'
//import { ServiceVersionsRepository } from '../../service-versions/v1/service-version-v1.repository';
import { ServiceVersionEntity } from '../../service-versions/entities/service-version.entity';


@Module({
    imports: [TypeOrmModule.forFeature([ServiceEntity,ServiceVersionEntity])],
    providers: [ServicesRepository, ServicesService],
    controllers: [ServicesController],
})
export class ServicesModule {}
