import { Time } from '@/ultils/constants';

export const config = {
  db: {
    logging: true,
    synchronize: false,
  },
  token: {
    authentication: {
      lifetime: 30 * Time.ONE_DAY,
      renewedTimes: 4,
    },
  },
};
