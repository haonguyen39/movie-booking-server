import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });
export const config = {
  database: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || 'booking-movie',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD,
    ssl: !!process.env.DB_SSL || false,

    entities: [`dist/api/**/*.entity{.ts,.js}`],

    migrations: [`dist/database/migrations/**/*{.ts,.js}`],
    logging: false,
    synchronize: process.env.DB_SYNCHRONIZE || true,
    autoLoadEntities: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
  },

  swagger: {
    siteTitle: 'Movie booking App | Documentation',
    title: 'Movie booking App  | Documentation',
    description: 'The Movie booking App  API Documentation',
    version: '1.0',
    bearerAuth: {
      type: 'http',
      in: 'Header',
      scheme: 'Bearer',
      bearerFormat: 'Bearer',
      name: 'Authorization',
      description: 'Please enter JWT token',
    },
  },
};
export const connectionSource = new DataSource(
  config['database'] as DataSourceOptions,
);
