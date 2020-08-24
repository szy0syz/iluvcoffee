import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1598261289789 implements MigrationInterface {
    name = 'SchemaSync1598261289789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "title" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "title"`);
    }

}
