import { Injectable ,ConflictException } from '@nestjs/common';
import { ServiceRepo } from './services.repository';
import { CreateServiceDto } from './dto/CreateServiceDto';

@Injectable()
export class ServicesService {
    constructor(private readonly servicesRepo: ServiceRepo) {}


    async create(dto: CreateServiceDto) {
        try {
            return await this.servicesRepo.createWithInitialVersion({
                name: dto.name,
                description: dto.description,
                v1Description: dto.v1Description,
                v1Version: dto.v1Version,
            });
        } catch (e: any) {
            // if you made name unique, this catches duplicate name inserts
            if (e?.code === '23505') throw new ConflictException('Service already exists');
            throw e;
        }
    }

}
