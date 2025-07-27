// components/Rotator.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';

interface RotatorProps {
  pages: string[];
}

export default function Rotator({ pages }: RotatorProps) {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      {pages.map((pageContent, index) => (
        <View key={index} style={styles.page}>
          <Text style={styles.text}>{pageContent}</Text>
        </View>
      ))}
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: { flex: 1 },
  page: { justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});
