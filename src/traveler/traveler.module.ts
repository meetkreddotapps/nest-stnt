import { Module } from '@nestjs/common';
import { TravelerController } from './traveler.controller';
import { TravelerService } from './traveler.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [TravelerController],
  providers: [TravelerService, ConfigService],
})
export class TravelerModule {}
