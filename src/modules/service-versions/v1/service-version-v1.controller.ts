/*
import { Controller, Get, Param } from '@nestjs/common';
import { ServiceVersionsService } from './service-version-v1.service';

@Controller('service-versions')
export class ServiceVersionsController {
    constructor(private readonly service: ServiceVersionsService) {}

    @Get(':serviceId')
    list(@Param('serviceId') serviceId: string) {
        return this.service.listVersions(serviceId);
    }
}
*/
