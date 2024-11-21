import { Injectable } from '@nestjs/common';
import { WebhookPayload } from '../webhook/webhook.types';

@Injectable()
export class KnowledgeGraphService {
  private knowledgeGraph: Map<string, Set<string>> = new Map();

  processConversation(payload: WebhookPayload) {
    const { structured, transcript_segments } = payload;
    
    // Extract main topic from title
    const mainTopic = structured.title.toLowerCase();
    
    // Extract keywords from overview and transcript
    const keywords = this.extractKeywords(structured.overview);
    transcript_segments.forEach(segment => {
      const segmentKeywords = this.extractKeywords(segment.text);
      keywords.push(...segmentKeywords);
    });

    // Update knowledge graph
    if (!this.knowledgeGraph.has(mainTopic)) {
      this.knowledgeGraph.set(mainTopic, new Set());
    }

    keywords.forEach(keyword => {
      this.knowledgeGraph.get(mainTopic).add(keyword);
    });

    return {
      topic: mainTopic,
      relatedConcepts: Array.from(this.knowledgeGraph.get(mainTopic)),
      category: structured.category,
      timestamp: payload.created_at
    };
  }

  private extractKeywords(text: string): string[] {
    // This is a simple implementation. Consider using NLP libraries like natural or compromise
    return text
      .toLowerCase()
      .split(' ')
      .filter(word => word.length > 3) // Filter out short words
      .filter(word => !this.isStopWord(word)); // Filter out common stop words
  }

  private isStopWord(word: string): boolean {
    const stopWords = ['the', 'is', 'at', 'which', 'on', 'and', 'a', 'an'];
    return stopWords.includes(word);
  }

  getRelatedTopics(topic: string): string[] {
    return Array.from(this.knowledgeGraph.get(topic) || []);
  }
}