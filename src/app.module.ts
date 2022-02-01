import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { DatabaseService } from './database/database.service';
import { TweetsModule } from './tweets/tweets.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bull';
import { MailingModule } from './mailing/mailing.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      synchronize: true,
    }),
    TweetsModule,
    MailingModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
