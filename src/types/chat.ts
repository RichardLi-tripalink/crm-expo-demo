export interface Message {
  id: string;
  type: 'SMS' | 'Email';
  content: string;
  timestamp: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
  };
  subject?: string;
}

export interface ChatUser {
  id: string;
  name: string;
  avatar?: string;
}

export interface AutopilotSettings {
  enabled: boolean;
  rules?: Array<{
    trigger: string;
    response: string;
  }>;
}
