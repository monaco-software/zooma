import { ForumTopic, ForumTopicMessage } from '@prisma/client';

export interface CreateTopicFormFields {
  topicName: string;
}

export interface ForumState {
  topics: ForumTopic[];
  messages: Record<number, ForumTopicMessage[]>;
}
