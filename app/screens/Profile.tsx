// screens/Profile.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Rotator from '../components/Rotator';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Rotator pages={['Profile Page 1', 'Profile Page 2']} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
