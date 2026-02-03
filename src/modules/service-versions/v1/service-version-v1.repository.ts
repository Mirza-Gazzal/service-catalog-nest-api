/*
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceVersionEntity } from '../entities/service-version.entity';

@Injectable()
export class ServiceVersionsRepo {
    constructor(
        @InjectRepository(ServiceVersionEntity)
        private readonly repo: Repository<ServiceVersionEntity>,
    ) {}

    create(data: Partial<ServiceVersionEntity>) {
        return this.repo.create(data);
    }

    save(entity: ServiceVersionEntity) {
        return this.repo.save(entity);
    }

    async createAndSave(input: {
        serviceId: string;
        version: string; // "1.0.0"
        description?: string;
    }) {
        const entity = this.repo.create({
            serviceId: input.serviceId,
            version: input.version,
            description: input.description,
        });
        return this.repo.save(entity);
    }

    // active versions only (not soft-deleted)
    listByService(serviceId: string) {
        return this.repo.find({
            where: { serviceId },
            order: { createdAt: 'DESC' }, // safest ordering
        });
    }

    findOneByServiceAndVersion(serviceId: string, version: string) {
        return this.repo.findOne({
            where: { serviceId, version },
        });
    }

    // If you want "latest", you need a definition:
    // 1) latest by createdAt (simple + reliable)
    findLatestByService(serviceId: string) {
        return this.repo.findOne({
            where: { serviceId },
            order: { createdAt: 'DESC' },
        });
    }

    // if you ever need to include soft-deleted rows:
    listByServiceIncludingDeleted(serviceId: string) {
        return this.repo.find({
            where: { serviceId },
            withDeleted: true,
            order: { createdAt: 'DESC' },
        });
    }
}
*/
