import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface WelcomeProps {}

const Welcome = (props: WelcomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {}
});
