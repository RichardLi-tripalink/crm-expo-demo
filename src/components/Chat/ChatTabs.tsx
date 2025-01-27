import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  activeTab: 'Info' | 'Chat' | 'Actions';
  onTabChange: (tab: 'Info' | 'Chat' | 'Actions') => void;
}

export default function ChatTabs({ activeTab, onTabChange }: Props) {
  const tabs: Array<'Info' | 'Chat' | 'Actions'> = ['Info', 'Chat', 'Actions'];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab} style={[styles.tab, activeTab === tab && styles.activeTab]} onPress={() => onTabChange(tab)}>
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    padding: 4,
    borderRadius: 8,
    margin: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '500',
  },
});
