import { Controller, Get } from '@nestjs/common';
import { TravelerService } from './traveler.service';
import { ConfigService } from '@nestjs/config';

@Controller('traveler')
export class TravelerController {
  constructor(
    private travelerService: TravelerService,
    private configService: ConfigService,
  ) {}

  @Get('/')
  getUsers() {
    console.log(this.configService.get<string>('MONGO_URL'));

    return { status: true, message: 'User found' };
  }
}
