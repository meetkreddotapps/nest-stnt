import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelerModule } from './traveler/traveler.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { loadEnvironmentVariables } from '../configs/env-loader.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.dev.env', '.local.env', '.staging.env', '.env'],
      isGlobal: true,
    }),
    TravelerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    const envFilePath =
      process.env.NODE_ENV === 'dev'
        ? '.dev.env'
        : process.env.NODE_ENV === 'prod'
        ? '.env'
        : process.env.NODE_ENV === 'loc'
        ? '.local.env'
        : process.env.NODE_ENV === 'stag'
        ? '.staging.env'
        : '';

    if (envFilePath) {
      loadEnvironmentVariables(envFilePath);
    }
  }
}
