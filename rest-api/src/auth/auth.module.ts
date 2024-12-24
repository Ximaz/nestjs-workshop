import { Module } from '@nestjs/common';
import { AuthStrategy } from './strategies/auth.strategy';

@Module({
  providers: [AuthStrategy],
})
export class AuthModule {}
