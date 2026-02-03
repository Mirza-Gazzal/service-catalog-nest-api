import { Injectable } from '@nestjs/common';
import { ServicesRepository } from './services.repository';

@Injectable()
export class ServicesService {
    constructor(private readonly servicesRepo: ServicesRepository) {}

    async dbSmokeTest() {
        const count = await this.servicesRepo.countActive();
        return { ok: true, activeServicesCount: count };
    }
}
