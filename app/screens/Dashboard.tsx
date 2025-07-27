// screens/Dashboard.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Rotator from '../components/Rotator';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Rotator pages={['Dashboard Page 1', 'Dashboard Page 2']} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
