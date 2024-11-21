import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookModule } from './webhook/webhook.module';
import { KnowledgeGraphModule } from './knowledge-graph/knowledge-graph.module';

@Module({
  imports: [WebhookModule, KnowledgeGraphModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
