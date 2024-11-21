export interface TranscriptSegment {
    text: string;
    speaker: string;
    speaker_id: number;
    is_user: boolean;
    start: number;
    end: number;
  }
  
  export interface StructuredData {
    title: string;
    overview: string;
    emoji: string;
    category: string;
    actionItems: string[];
    events: any[];
  }
  
  export interface WebhookPayload {
    id: string;
    created_at: string;
    structured: StructuredData;
    started_at: string;
    finished_at: string;
    transcript_segments: TranscriptSegment[];
    plugins_results: any[];
    geolocation: any;
    photos: any[];
    discarded: boolean;
    deleted: boolean;
    source: string;
    language: string;
    external_data: any;
    status: string;
  }