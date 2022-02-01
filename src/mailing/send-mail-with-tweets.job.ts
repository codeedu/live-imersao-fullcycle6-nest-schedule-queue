import { Process, Processor } from '@nestjs/bull';
import { Controller, UseGuards } from '@nestjs/common';
import { Job } from 'bull';

@Processor('emails')
export class SendMailWithTweetsJob {
  @Process()
  handle(job: Job) {
    console.log(JSON.stringify(job.data));
  }
}


//API Rest
//Cron Job
//Queue

//sequelize

//processos de agendamento

//aplicação WEB   | worker do agendamento - standalone

//websocket