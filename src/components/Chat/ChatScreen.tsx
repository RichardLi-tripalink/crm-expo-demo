import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatHeader from './ChatHeader';
import AutopilotToggle from './AutopilotToggle';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Message, ChatUser } from '../../types/chat';
import ChatTabs from './ChatTabs';

export default function ChatScreen() {
  const [activeTab, setActiveTab] = useState<'Info' | 'Chat' | 'Actions'>('Chat');
  const [autopilotEnabled, setAutopilotEnabled] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'SMS',
      content: 'Hello! How can I help you today?',
      timestamp: new Date().toISOString(),
      sender: {
        id: '1',
        name: 'Julie Logan',
      },
    },
  ]);
  const [currentAgent, setCurrentAgent] = useState<ChatUser>({
    id: '1',
    name: 'Julie Logan',
  });
  // 为 web 平台添加适当的样式
  const containerStyle = Platform.select<any>({
    web: {
      flex: 1,
      backgroundColor: '#fff',
      maxWidth: 800,
      marginHorizontal: 'auto',
      height: '100vh',
    },
    default: styles.container,
  });

  return (
    <SafeAreaView style={containerStyle}>
      <View style={styles.content}>
        <ChatHeader client={{ id: '2', name: 'Giana Siphron' }} agent={currentAgent} onAgentChange={setCurrentAgent} />

        <ChatTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <AutopilotToggle enabled={autopilotEnabled} onToggle={setAutopilotEnabled} />

        <MessageList messages={messages} />

        <MessageInput
          onSend={(message) => {
            const newMessage = {
              id: String(messages.length + 1),
              ...message,
              sender: currentAgent,
            };
            setMessages([...messages, newMessage]);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});
