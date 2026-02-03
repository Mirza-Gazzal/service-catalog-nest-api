import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './service-v1.service';

@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) {}

    @Get('health')
    async health() {
        return this.servicesService.dbSmokeTest();
    }
}