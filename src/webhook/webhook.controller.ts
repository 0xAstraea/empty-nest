import { Controller, Post, Body } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Post()
  handleWebhook(@Body() payload: any): string {
    console.log('Received webhook:', payload);
    // Process the webhook payload here
    return 'Webhook received';
  }
}