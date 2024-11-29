import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersTable1730259222176 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

            CREATE TABLE "Users" (
                id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
                role uuid,
                email character varying(255),
                hash character varying(255),
                facebook_id character varying(255),
                first_name character varying(255),
                last_name character varying(255),
                created_at timestamp with time zone not null,
                updated_at timestamp with time zone not null,
                photo_url character varying(255),
                timezone character varying(255),
                email_verified_at timestamp with time zone,
                mute_sounds boolean default true,
                is_locked boolean not null default false,
                bad_attempts integer not null default 0,
                last_login timestamp with time zone,
                deleted_at timestamp with time zone
            );

            CREATE UNIQUE INDEX email_unique_idx ON "Users" (lower(email));
            CREATE INDEX idx_users_id ON "Users" (id);
            CREATE UNIQUE INDEX users_email ON "Users" (email);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "Users";
        `);
    }
}