import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

// import { UserService } from '@/api/users/user.service';
// import { Users } from '@/api/users/entities/user.entity';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    configService: ConfigService,
    // private readonly userService: UserService,
  ) {
    super({
      ignoreExpiration: true,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt.secret'),
    });
  }
  // async validate({ email, username }: ITokenPayload): Promise<Users> {
  //   const user = await this.userService.findOneByEmailOrUsername({
  //     email,
  //     username,
  //   });
  //   return user;
  // }
}
