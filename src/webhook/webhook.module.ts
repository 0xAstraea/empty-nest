import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { KnowledgeGraphModule } from '../knowledge-graph/knowledge-graph.module';

@Module({
  imports: [KnowledgeGraphModule],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
