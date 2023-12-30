import { Time } from '@/ultils/constants';

export const config = {
  db: {
    ssl: {
      rejectUnauthorized: false,
    },
    logging: true,
    synchronize: false,
  },
  token: {
    authentication: {
      lifetime: 7 * Time.ONE_DAY,
      renewedTimes: 4,
    },
  },
};
