import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    JoinColumn,
    Index,
} from 'typeorm';
import { ServiceEntity } from '../../service/entities/service.entity';

@Entity('service_versions')
@Index(['serviceId', 'version'], { unique: true })
export class ServiceVersionEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    serviceId: string;

    @ManyToOne(() => ServiceEntity, (s) => s.versions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'serviceId' })
    service: ServiceEntity;

    @Column({ type: 'varchar', length: 50 })
    version: string; // e.g. "1.0.0"

    @Column({ type: 'varchar', length: 256, nullable: true })
    description?: string;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt?: Date | null;
}
