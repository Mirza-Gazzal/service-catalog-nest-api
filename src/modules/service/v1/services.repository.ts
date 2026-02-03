import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { ServiceEntity } from '../entities/service.entity';

@Injectable()
export class ServicesRepository {
    constructor(
        @InjectRepository(ServiceEntity)
        private readonly repo: Repository<ServiceEntity>,
    ) {}

    // Simple proof query (hits DB)
    async countActive(): Promise<number> {
        return this.repo.count({
            where: { deletedAt: IsNull() },
        });
    }

    // Create row
    async createOne(data: { name: string; description?: string | null }) {
        const entity = this.repo.create({
            name: data.name,
            description: data.description ?? null,
        });
        return this.repo.save(entity);
    }

    // Find by id (active only)
    async findByIdActive(id: string) {
        return this.repo.findOne({
            where: { id, deletedAt: IsNull() },
        });
    }
}
