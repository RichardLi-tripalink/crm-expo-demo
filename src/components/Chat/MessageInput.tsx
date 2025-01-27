import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onSend: (message: any) => void;
}

export default function MessageInput({ onSend }: Props) {
  const [messageType, setMessageType] = useState<'SMS' | 'Email'>('SMS');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.typeSelector}>
        <TouchableOpacity style={[styles.typeButton, messageType === 'SMS' && styles.activeType]} onPress={() => setMessageType('SMS')}>
          <Ionicons name="chatbubble-outline" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.typeButton, messageType === 'Email' && styles.activeType]} onPress={() => setMessageType('Email')}>
          <Ionicons name="mail-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {messageType === 'Email' && <TextInput style={styles.subjectInput} placeholder="Subject:" value={subject} onChangeText={setSubject} />}

      <View style={styles.inputContainer}>
        <TextInput style={styles.messageInput} placeholder="Type your message..." multiline value={content} onChangeText={setContent} />

        <View style={styles.actions}>
          <TouchableOpacity>
            <Ionicons name="attach" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="image" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="create" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.sendButton, !content && styles.sendButtonDisabled]}
          disabled={!content}
          onPress={() => {
            if (content) {
              onSend({
                type: messageType,
                content,
                subject: messageType === 'Email' ? subject : undefined,
                timestamp: new Date().toISOString(),
              });
              setContent('');
              setSubject('');
            }
          }}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  typeSelector: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 12,
  },
  typeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  activeType: {
    backgroundColor: '#e3e3e3',
  },
  typeText: {
    marginLeft: 4,
    color: '#666',
  },
  subjectInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  messageInput: {
    padding: 12,
    maxHeight: 120,
    fontSize: 16,
  },
  actions: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    gap: 16,
  },
  sendButton: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  sendButtonDisabled: {
    backgroundColor: '#ccc',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
