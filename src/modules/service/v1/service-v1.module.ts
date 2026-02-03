import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from '../entities/service.entity';
import { ServiceRepo } from './services.repository';
import {ServicesController} from  './service-v1.controller';
import  { ServicesService} from './service-v1.service'
import { ServiceVersionEntity } from '../../service-versions/entities/service-version.entity';




@Module({
    imports: [TypeOrmModule.forFeature([ServiceEntity,ServiceVersionEntity])],
    providers: [ServiceRepo,ServicesService],
    controllers: [ServicesController],
})
export class ServicesModule {}
