import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import OAuthButtons from './components/OAuthButtons';  // Import OAuth buttons component
import { BASE_URL } from '@/constants/config';  // Import BASE_URL

const AuthPage = () => {
    console.log('AuthPage rendering');
    const [showLogin, setShowLogin] = useState(false);
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/api/current-user`, {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => setUser(data.user));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                {user ? (
                    <View style={styles.welcomeMessage}>
                        <Text style={styles.welcomeText}>
                            Welcome, <Text style={styles.userName}>{user.displayName}</Text>!
                        </Text>
                        <Button
                            title="Logout"
                            onPress={() => window.location.href = `${BASE_URL}/auth/logout`}
                        />
                    </View>
                ) : (
                    <View style={styles.authForm}>
                        <Text style={styles.authHeader}>
                            {showLogin ? 'Welcome Back' : 'Create Account'}
                        </Text>
                        {showLogin ? <LoginForm /> : <SignupForm />}
                        <Button title={showLogin ? 'Switch to Sign Up' : 'Switch to Login'} onPress={() => setShowLogin(!showLogin)} />

                        <View style={styles.divider}>
                            <Text style={styles.orText}>Or continue with</Text>
                        </View>

                        <OAuthButtons />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        padding: 20,
    },
    authForm: {
        width: '100%',
        maxWidth: 400,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    authHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    divider: {
        marginVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 10,
    },
    orText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#777',
    },
    welcomeMessage: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    userName: {
        color: '#2563eb',
    },
});

export default AuthPage;
