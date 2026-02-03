import  { Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ServiceEntity } from '../entities/service.entity';
import  {ServicesService } from  './service-v1.service';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceEntity])],
    providers: [ServicesService],
    exports: [ServicesService],
})
export class ServicesModule {}