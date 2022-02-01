import { SendMailWithTweetsJob } from './send-mail-with-tweets.job';
import { Module } from '@nestjs/common';

@Module({
  providers: [SendMailWithTweetsJob],
})
export class MailingModule {}


// tarefas que verificar novos tweets 

//fila de processamento 

/// 1 2 3 4 5 6 7 

// bulljs usando redis 