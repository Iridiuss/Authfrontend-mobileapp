import React from 'react';
import { View, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { BASE_URL } from '@/constants/config';

const OAuthButtons = () => {
    return (
        <View style={styles.buttonContainer}>
            {/* Google */}
            <TouchableOpacity
                style={[styles.oauthButton, styles.googleButton]}
                onPress={() => {
                    Linking.openURL(`${BASE_URL}/auth/google`);
                }}
            >
                <Svg width={20} height={20} viewBox="0 0 24 24">
                    <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </Svg>
            </TouchableOpacity>

            {/* GitHub */}
            <TouchableOpacity
                style={[styles.oauthButton, styles.githubButton]}
                onPress={() => {
                    Linking.openURL(`${BASE_URL}/auth/github`);
                }}
            >
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="white">
                    <Path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </Svg>
            </TouchableOpacity>

            {/* Twitter */}
            <TouchableOpacity
                style={[styles.oauthButton, styles.twitterButton]}
                onPress={() => {
                    Linking.openURL(`${BASE_URL}/auth/twitter`);
                }}
            >
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="white">
                    <Path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </Svg>
            </TouchableOpacity>

            {/* LinkedIn */}
            <TouchableOpacity
                style={[styles.oauthButton, styles.linkedinButton]}
                onPress={() => {
                    Linking.openURL(`${BASE_URL}/auth/linkedin`);
                }}
            >
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="white">
                    <Path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </Svg>
            </TouchableOpacity>

            {/* Facebook */}
            <TouchableOpacity
                style={[styles.oauthButton, styles.facebookButton]}
                onPress={() => {
                    Linking.openURL(`${BASE_URL}/auth/facebook`);
                }}
            >
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="white">
                    <Path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </Svg>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
        padding: 8,
    },
    oauthButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    googleButton: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    githubButton: {
        backgroundColor: '#24292e',
    },
    twitterButton: {
        backgroundColor: '#1DA1F2',
    },
    linkedinButton: {
        backgroundColor: '#0A66C2',
    },
    facebookButton: {
        backgroundColor: '#1877F2',
    },
});

export default OAuthButtons;
