import React from 'react';
import { View, Switch, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

export default function AutopilotToggle({ enabled, onToggle }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <Switch value={enabled} onValueChange={onToggle} trackColor={{ false: '#ddd', true: '#4CAF50' }} />
        <Text style={styles.label}>Autopilot</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Ionicons name="help-circle-outline" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>All</Text>
        <Ionicons name="chevron-down" size={16} color="#666" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  helpButton: {
    padding: 4,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
  },
  filterText: {
    marginRight: 4,
    color: '#333',
    fontSize: 14,
  },
});
