import {
  Get,
  Put,
  Post,
  Delete,
  HttpCode,
  HttpStatus,
  SetMetadata,
  RequestMethod,
  applyDecorators,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';

import type { CustomDecorator } from '@nestjs/common';

import { SwaggerApi } from './swagger.decorator';

import type { ISwaggerParams } from './swagger.decorator';
import { IS_PUBLIC_KEY } from '@/ultils/constants';

export interface IRouteParams {
  path: string;
  code?: number;
  method: number;
  jwtSecure?: boolean;
  localSecure?: boolean;
  swaggerInfo?: ISwaggerParams;
}

function Public(): CustomDecorator<string> {
  return SetMetadata(IS_PUBLIC_KEY, true);
}

export function InjectRoute({
  path = '/',
  swaggerInfo = { secure: true },
  jwtSecure = true,
  code = HttpStatus.OK,
  method = RequestMethod.GET,
}: IRouteParams) {
  const methodDecorator = {
    [RequestMethod.GET]: Get,
    [RequestMethod.PUT]: Put,
    [RequestMethod.POST]: Post,
    [RequestMethod.DELETE]: Delete,
  };

  const decorators = [
    methodDecorator[method](path),
    HttpCode(code),
    SwaggerApi({ secure: jwtSecure, ...swaggerInfo }),
  ];

  if (!jwtSecure) {
    decorators.push(Public());
  }

  return applyDecorators(...decorators);
}

export const ReqUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
