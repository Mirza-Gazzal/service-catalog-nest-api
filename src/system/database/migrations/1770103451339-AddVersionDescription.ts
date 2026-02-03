import { MigrationInterface, QueryRunner } from "typeorm";

export class AddVersionDescription1770103451339 implements MigrationInterface {
    name = 'AddVersionDescription1770103451339'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "service_versions" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "serviceId" uuid NOT NULL,
                "version" character varying(50) NOT NULL,
                "description" character varying(256),
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP WITH TIME ZONE,
                CONSTRAINT "PK_2cdf123a2486f00862495e81101" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "IDX_cdbbf949714243706a5048c3c4" ON "service_versions" ("serviceId", "version")
        `);
        await queryRunner.query(`
            ALTER TABLE "service_versions"
            ADD CONSTRAINT "FK_b94e0f41ebbfefd949ac1f0f60e" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "service_versions" DROP CONSTRAINT "FK_b94e0f41ebbfefd949ac1f0f60e"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_cdbbf949714243706a5048c3c4"
        `);
        await queryRunner.query(`
            DROP TABLE "service_versions"
        `);
    }

}
