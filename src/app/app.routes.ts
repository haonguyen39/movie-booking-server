import { RequestMethod } from '@nestjs/common';
import { IRouteParams } from '@/common/decorators/api.decorator';

export default {
  index: 'core',
  health: <IRouteParams>{
    path: '/health',
    method: RequestMethod.GET,
    jwtSecure: false,
  },
};
