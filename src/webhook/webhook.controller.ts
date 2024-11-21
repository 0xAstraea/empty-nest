import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { KnowledgeGraphService } from '../knowledge-graph/knowledge-graph.service';
import { WebhookPayload } from './webhook.types';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly knowledgeGraphService: KnowledgeGraphService) {}

  @Post()
  handleWebhook(@Body() payload: WebhookPayload) {
    const result = this.knowledgeGraphService.processConversation(payload);
    return {
      status: 'success',
      data: result
    };
  }

  @Get('topics/:topic')
  getRelatedTopics(@Param('topic') topic: string) {
    return {
      topic,
      related: this.knowledgeGraphService.getRelatedTopics(topic)
    };
  }
}