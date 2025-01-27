import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ChatUser } from '../../types/chat';

interface Props {
  client: ChatUser;
  agent: ChatUser;
  onAgentChange: (agent: ChatUser) => void;
}

export default function ChatHeader({ client, agent, onAgentChange }: Props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.clientName}>{client.name}</Text>
        <TouchableOpacity style={styles.agentSelector}>
          <Text style={styles.agentName}>{agent.name}</Text>
          <Ionicons name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.moreButton}>
        <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    height: 60,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  titleContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  clientName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  agentSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agentName: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
  moreButton: {
    padding: 8,
  },
});
