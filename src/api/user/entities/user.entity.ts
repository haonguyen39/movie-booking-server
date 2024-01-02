import { BaseEntity } from '@/common/base/base.entity';
import { Column, Entity } from 'typeorm';
import { ERole } from '../user.enum';

@Entity()
export class Users extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ enum: ERole })
  role: ERole;
}
