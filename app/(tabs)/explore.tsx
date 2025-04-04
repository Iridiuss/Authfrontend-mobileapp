import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function ExploreScreen() {
    const dummyCategories = [
        "Nature", "Abstract", "Portraits", "Architecture", "Space",
        "Animals", "Fantasy", "Landscapes", "Urban", "Minimalist"
    ];

    const dummyTrending = [
        "AI Masterpieces", "Digital Art", "Weekly Highlights",
        "Community Favorites", "New Styles"
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Explore</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Popular Categories</Text>
                <View style={styles.categoryGrid}>
                    {dummyCategories.map((category, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.categoryItem}
                        >
                            <Text style={styles.categoryText}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Trending Now</Text>
                {dummyTrending.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.trendingItem}
                    >
                        <Text style={styles.trendingText}>{item}</Text>
                        <Text style={styles.trendingSubtext}>🔥 Popular in AI generation</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1a1a1a',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12,
        color: '#2a2a2a',
    },
    categoryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    categoryItem: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        minWidth: '30%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#4a4a4a',
    },
    trendingItem: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    trendingText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2a2a2a',
        marginBottom: 4,
    },
    trendingSubtext: {
        fontSize: 12,
        color: '#666',
    },
});
