import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './service-v1.service';
import { Body, Post } from '@nestjs/common';
import { CreateServiceDto } from './dto/CreateServiceDto';


@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) {}

    @Post()
    create(@Body() dto: CreateServiceDto) {
        return this.servicesService.create(dto);
    }
}