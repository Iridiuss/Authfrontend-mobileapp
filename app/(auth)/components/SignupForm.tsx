import React, { useState } from 'react';
import { TextInput, Button, View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { BASE_URL } from '../../../constants/config';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SignupForm = () => {
  const [step, setStep] = useState(1); // 1 for signup, 2 for verification
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setMessage(data.message);
      setStep(2); // Move to verification step
    } catch (err: any) {
      setError(err.message || 'Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerification = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${BASE_URL}/auth/signup/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: formData.email,
          code: verificationCode,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      // Redirect to profile page on successful verification
      router.push('/(tabs)');
    } catch (err: any) {
      setError(err.message || 'Verification failed');
    } finally {
      setIsLoading(false);
    }
  };

  if (step === 2) {
    return (
      <View>
        {error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}
        {message && <Text style={{ color: 'green', marginBottom: 10 }}>{message}</Text>}
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
          Verify Email
        </Text>
        <TextInput
          placeholder="Verification Code"
          value={verificationCode}
          onChangeText={setVerificationCode}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        />
        <View style={{ marginTop: 10 }}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <Button title="Verify" onPress={handleVerification} />
          )}
        </View>
      </View>
    );
  }

  return (
    <View>
      {error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}
      <TextInput
        placeholder="Display Name"
        value={formData.displayName}
        onChangeText={(text) => setFormData({ ...formData, displayName: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        style={styles.input}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="#666"
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Button title="Sign Up" onPress={handleSignup} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  eyeIcon: {
    padding: 10,
  }
});

export default SignupForm;
