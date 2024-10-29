import { DataSource } from 'typeorm';

const datasource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'postgres',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  username: process.env.POSTGRES_USER || 'postgres',
  database: process.env.POSTGRES_DB || 'publicamas',
  password: process.env.POSTGRES_PASSWORD || '1234',
  migrations: [__dirname + '/../db/migrations/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
  logging: true,
});
datasource.initialize();
export default datasource;