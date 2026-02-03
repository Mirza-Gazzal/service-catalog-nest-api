import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from './entities/service.entity';
import { ServicesRepository } from './services.repository';
import { ServicesService } from './services.service';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceEntity])],
    providers: [ServicesRepository, ServicesService],
    exports: [ServicesRepository, ServicesService],
})
export class ServicesModule {}
