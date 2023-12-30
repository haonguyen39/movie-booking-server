import { Time } from '@/ultils/constants';

export const config = {
  db: {
    logging: false,
    synchronize: false,
    // autoLoadEntities: true,
  },
  token: {
    authentication: {
      lifetime: 3 * Time.ONE_DAY,
      renewedTimes: 10,
    },
  },
};
