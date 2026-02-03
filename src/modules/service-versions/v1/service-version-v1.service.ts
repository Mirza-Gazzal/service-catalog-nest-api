// /*
// import { Injectable } from '@nestjs/common';
// import { ServiceVersionsRepo } from '../entities/service-versions.repo';
//
// @Injectable()
// export class ServiceVersionsService {
//     constructor(private readonly versionsRepo: ServiceVersionsRepo) {}
//
//     async createVersion(input: {
//         serviceId: string;
//         vNumber: number;
//         description?: string;
//         deprecated?: boolean;
//     }) {
//         const entity = this.versionsRepo.create({
//             serviceId: input.serviceId,
//             vNumber: input.vNumber,
//             description: input.description,
//             deprecated: input.deprecated ?? false,
//         });
//
//         return this.versionsRepo.save(entity);
//     }
//
//     listVersions(serviceId: string) {
//         return this.versionsRepo.findByService(serviceId);
//     }
// }
// */
