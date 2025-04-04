import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { BASE_URL } from '@/constants/config';
import { useRouter } from 'expo-router';

interface User {
  displayName: string;
  email?: string;
  googleId?: string;
  githubId?: string;
  twitterId?: string;
  linkedinId?: string;
  facebookId?: string;
  profilePhoto?: string;
}

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`${BASE_URL}/auth/current-user`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => setUser(data.user))
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/logout`, {
        method: 'GET',
        credentials: 'include'
      });

      const data = await response.json();

      if (data.success) {
        router.replace('/(auth)/AuthPage');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          {/* Profile Avatar */}
          <View style={styles.avatarContainer}>
            {user?.profilePhoto ? (
              <Image
                source={{ uri: user.profilePhoto }}
                style={styles.avatar}
              />
            ) : (
              <View style={[styles.avatar, styles.avatarPlaceholder]}>
                <Svg width={48} height={48} viewBox="0 0 24 24" fill="#9CA3AF">
                  <Path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </Svg>
              </View>
            )}
          </View>

          {/* User Info */}
          <Text style={styles.userName}>
            {user ? user.displayName : 'Loading...'}
          </Text>

          {/* Email Display */}
          {user?.email ? (
            <View style={styles.emailContainer}>
              <Svg width={16} height={16} viewBox="0 0 24 24" stroke="#6B7280">
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  fill="none"
                />
              </Svg>
              <Text style={styles.emailText}>{user.email}</Text>
            </View>
          ) : (
            <Text style={styles.noEmailText}>No email provided</Text>
          )}

          <Text style={styles.userType}>Authenticated User</Text>

          {/* Account Type Badges */}
          <View style={styles.badgeContainer}>
            {user?.googleId && (
              <View style={[styles.badge, styles.googleBadge]}>
                <Text style={styles.googleBadgeText}>Google Account</Text>
              </View>
            )}
            {user?.githubId && (
              <View style={[styles.badge, styles.githubBadge]}>
                <Text style={styles.githubBadgeText}>GitHub Account</Text>
              </View>
            )}
            {user?.twitterId && (
              <View style={[styles.badge, styles.twitterBadge]}>
                <Text style={styles.twitterBadgeText}>Twitter Account</Text>
              </View>
            )}
            {user?.facebookId && (
              <View style={[styles.badge, styles.facebookBadge]}>
                <Text style={styles.facebookBadgeText}>Facebook Account</Text>
              </View>
            )}
            {user?.linkedinId && (
              <View style={[styles.badge, styles.linkedinBadge]}>
                <Text style={styles.linkedinBadgeText}>LinkedIn Account</Text>
              </View>
            )}
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Logout Button */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  card: {
    marginVertical: 48,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    padding: 32,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#E5E7EB',
    marginBottom: 16,
    borderWidth: 4,
    borderColor: 'white',
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  emailText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#6B7280',
  },
  noEmailText: {
    marginTop: 4,
    fontSize: 14,
    color: '#9CA3AF',
    fontStyle: 'italic',
  },
  userType: {
    marginTop: 8,
    fontSize: 14,
    color: '#6B7280',
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 16,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 9999,
  },
  googleBadge: {
    backgroundColor: '#FEE2E2',
  },
  googleBadgeText: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '500',
  },
  githubBadge: {
    backgroundColor: '#F3F4F6',
  },
  githubBadgeText: {
    color: '#4B5563',
    fontSize: 12,
    fontWeight: '500',
  },
  twitterBadge: {
    backgroundColor: '#DBEAFE',
  },
  twitterBadgeText: {
    color: '#2563EB',
    fontSize: 12,
    fontWeight: '500',
  },
  facebookBadge: {
    backgroundColor: '#E0E7FF',
  },
  facebookBadgeText: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '500',
  },
  linkedinBadge: {
    backgroundColor: '#DBEAFE',
  },
  linkedinBadgeText: {
    color: '#1E40AF',
    fontSize: 12,
    fontWeight: '500',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E7EB',
    marginTop: 24,
  },
  logoutButton: {
    marginTop: 24,
    backgroundColor: '#DC2626',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});
