import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    Index,
} from 'typeorm';


/**
 * Represents a service offering within the system.
 * * This entity tracks service metadata,
 * and implements soft-deletion to preserve historical data.
 * * @dbTable services
 */
@Entity('services')
export class ServiceEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string; //  primary key + unique automatically


    @Column({ type: 'varchar', length: 120 })
    name: string; // display name

    @Column({ type: 'text', nullable: true })
    description?: string; // optional long text

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    // "modified on"
    @UpdateDateColumn({ type: 'timestamptz' })
    modifiedAt: Date;

    // soft delete flag (null = active)
    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt?: Date | null;
}
