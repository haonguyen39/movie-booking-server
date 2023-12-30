import { NestFactory } from '@nestjs/core';
import { LogLevel } from '@nestjs/common';

import type { INestApplication } from '@nestjs/common';

import { AppModule } from './app.module';
import { isDevelopmentEnv } from '@/ultils/helpers';
import { genAPIDocument } from './app.document';
import { loadMiddlewares } from './app.middleware';

export const initApplication = async (): Promise<INestApplication> => {
  const isDevEnv = isDevelopmentEnv();

  let logLevels: LogLevel[] = ['error', 'log', 'warn'];

  if (isDevEnv) {
    logLevels = ['error', 'warn', 'log', 'verbose', 'debug'];
  }

  const app = await NestFactory.create(AppModule, {
    logger: logLevels,
  });
  loadMiddlewares(app);

  genAPIDocument(app);

  return app;
};
