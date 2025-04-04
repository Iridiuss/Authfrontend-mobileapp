import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen
          name="AuthPage"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AuthLayout;
