import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Message } from '../../types/chat';

interface Props {
  messages: Message[];
}

export default function MessageList({ messages }: Props) {
  const renderMessage = ({ item }: { item: Message }) => (
    <View style={styles.messageContainer}>
      <View style={styles.messageHeader}>
        <Text style={styles.messageType}>{item.type}</Text>
        <Text style={styles.timestamp}>{new Date(item.timestamp).toLocaleTimeString()}</Text>
      </View>

      {item.type === 'Email' && item.subject && <Text style={styles.subject}>Subject: {item.subject}</Text>}

      <View style={styles.messageBubble}>
        <Text style={styles.messageText}>{item.content}</Text>
      </View>

      <View style={styles.senderInfo}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {item.sender.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </Text>
        </View>
        <Text style={styles.senderName}>{item.sender.name}</Text>
      </View>
    </View>
  );

  return <FlatList style={styles.container} contentContainerStyle={styles.listContent} data={messages} renderItem={renderMessage} keyExtractor={(item) => item.id} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 16,
  },
  messageContainer: {
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  messageType: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  subject: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  messageBubble: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  senderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  senderName: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
});
