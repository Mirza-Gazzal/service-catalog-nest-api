import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEntity } from '../entities/service.entity';
import { ServiceVersionEntity } from '../../service-versions/entities/service-version.entity';

@Injectable()
export class ServiceRepo {
    constructor(
        @InjectRepository(ServiceEntity)
        private readonly repo: Repository<ServiceEntity>,
    ) {}

    async createWithInitialVersion(input: {
        name: string;
        description?: string;
        v1Description?: string;
        v1Version?: string; // optional override (default 1.0.0)
    }) {
        const v1 = new ServiceVersionEntity();
        v1.version = input.v1Version ?? '1.0.0';
        v1.description = input.v1Description ?? 'Initial version';

        const service = this.repo.create({
            name: input.name,
            description: input.description,
            versions: [v1], // cascade insert will insert into service_versions
        });

        return this.repo.save(service);
    }

    findById(id: string) {
        return this.repo.findOne({
            where: { id },
            relations: { versions: true },
        });
    }

    findByName(name: string) {
        return this.repo.findOne({
            where: { name },
            relations: { versions: true },
        });
    }
}
