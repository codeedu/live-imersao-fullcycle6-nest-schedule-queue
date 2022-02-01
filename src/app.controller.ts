import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('prefixo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test') //GET
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test1') //GET
  acao(): string {
    return 'FullCycle';
  }
}
